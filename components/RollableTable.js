import React, { useEffect, useState } from 'react'
import Select from 'react-select'

const generateTable = (markdown) => {
  let lines = markdown.split('\n')
  let table = '<table>'

  let tr = '<tr>'
  let head = lines[0].substring(1, lines[0].length - 1).split('|')
  head.forEach((head) => (tr += `<th>${head.trim().replaceAll('*', '')}</th>`))
  tr += '</tr>'
  table += tr

  for (let i = 2; i < lines.length; i++) {
    let line = lines[i].substring(1, lines[i].length - 1)
    let elements = line.split('|')
    let html = '<tr>'
    elements.forEach((ele) => (html += `<td>${ele.trim()}</td>`))
    html += '</tr>'
    table += html
  }
  table += '</table>'
  return table
}

const populateRollTable = (table, debug, choice) => {
  let lines = table.split('\n')
  let header = lines[0].substring(1, lines[0].length - 1).split('|')
  let diceColumns = []
  let totalDice = 0
  let values = {}
  for (let i = 0; i < header.length - 1; i += 1) {
    let data = header[i].trim().replaceAll('*', '').toUpperCase()
    let headerName = header[i + 1].trim().replaceAll('*', '').toUpperCase()
    if (data === 'D6') {
      diceColumns.push(i)
      totalDice = 6
      if (choice) values[headerName] = {}
    }
    if (data === 'D8') {
      diceColumns.push(i)
      totalDice = 8
      if (choice) values[headerName] = {}
    }
    if (data === 'D20') {
      diceColumns.push(i)
      totalDice = 20
      if (choice) values[headerName] = {}
    }
    if (data === 'D%') {
      diceColumns.push(i)
      totalDice = 100
      if (choice) values[headerName] = {}
    }
  }
  if (debug) console.log(header)
  diceColumns.push(header.length)
  for (let i = 2; i < lines.length; i++) {
    let entries = lines[i].substring(1, lines[i].length - 1).split('|')
    for (let col = 0; col < diceColumns.length - 1; col += 1) {
      if (diceColumns[col] === header.length) {
        break
      }
      if (!(entries[diceColumns[col]].trim() in values) && !choice) {
        values[entries[diceColumns[col]].trim()] = []
      }
      for (let j = diceColumns[col] + 1; j < diceColumns[col + 1]; j++) {
        if (choice) {
          let h = header[j].trim().replaceAll('*', '').toUpperCase()
          if (debug) console.log(h)
          if (!(h in values)) values[h] = {}
          let dict = values[h]
          if (debug) console.log(dict)
          let key = entries[diceColumns[col]].trim()
          if (!(key in dict)) dict[key] = []
          dict[key].push(entries[j].trim())
        } else {
          values[entries[diceColumns[col]].trim()].push(entries[j].trim())
        }
      }
    }
  }
  if (debug) console.log(values)
  const finalDict = {}
  for (const [key, value] of Object.entries(values)) {
    if (choice) {
      finalDict[key] = {}

      for (const [k, v] of Object.entries(value)) {
        if (k.includes('-')) {
          let values = k.split('-')
          let min = parseInt(values[0])
          let max = parseInt(values[1])
          if (max === 0) max = 100
          for (let i = min; i <= max; i++) {
            if (!(i in finalDict[key])) finalDict[key][i] = []
            finalDict[key][i].push(v)
          }
        } else {
          let ke = parseInt(k) != 0 ? parseInt(k) : 100
          if (!(ke in finalDict[key])) finalDict[key][ke] = []
          finalDict[key][ke].push(v)
        }
      }
    } else {
      if (key.includes('-')) {
        let values = key.split('-')
        let min = parseInt(values[0])
        let max = parseInt(values[1])
        if (max === 0) max = 100
        for (let i = min; i <= max; i++) {
          if (!(i in finalDict)) finalDict[i] = []
          finalDict[i].push(value)
        }
      } else {
        let k = parseInt(key) != 0 ? parseInt(key) : 100
        if (!(k in finalDict)) finalDict[k] = []
        finalDict[k].push(value)
      }
    }
  }
  return [finalDict, totalDice]
}

const rollTable = (table, choice, elem) => {
  let max = table[1]
  let min = max === 100 ? 0 : 1
  let roll = Math.floor(Math.random() * (max - min + 1)) + min
  if (roll === 0) roll = 100
  let data = table[0]
  if (choice) return data[elem][roll]
  return data[roll]
}

export default function RollableTable({ debug, input, choice }) {
  const [table, setTable] = useState(generateTable(input))
  const [data, setData] = useState(null)
  const [options, setOptions] = useState([])
  const [effect, setEffect] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')
  useEffect(() => {
    setTable(generateTable(input))
  }, [])
  useEffect(() => {
    setData(populateRollTable(input, debug, choice))
  }, [table])
  useEffect(() => {
    if (choice && data) {
      let op = []
      let i = 0
      for (const [k, v] of Object.entries(data[0])) {
        if (i < 1) {
          setSelectedValue(k)
          i++
        }
        op.push({ label: k, value: k })
      }
      setOptions(op)
    }
  }, [data])
  if (debug) console.log(selectedValue)
  const [result, setResult] = useState([''])
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ overflowY: 'scroll' }} dangerouslySetInnerHTML={{ __html: table }} />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          {choice && typeof window != undefined && (
            <div style={{ paddingTop: 10, paddingBottom: 10 }}>
              <Select
                options={options}
                defaultValue={options[0]}
                value={{ label: selectedValue, value: selectedValue }}
                onChange={(value) => setSelectedValue(value.label)}
              />
            </div>
          )}
          <button
            onClick={() => {
              setEffect(true)
              setResult(rollTable(data, choice, selectedValue))
            }}
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block rounded bg-slate-100 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-slate-200 hover:shadow-lg focus:bg-slate-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-100 active:shadow-lg"
            style={{ border: '1px solid black', padding: 10 }}
          >
            Press To Generate
          </button>
        </div>
        <div
          style={{
            alignSelf: choice ? 'flex-end' : 'center',
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 10,
            fontWeight: 'bold',
          }}
        >
          Result:{' '}
          <div
            id="text"
            onAnimationEnd={() => setEffect(false)}
            className={`${effect && 'animate-wiggle'} pl-2`}
          >
            {' '}
            {result.length > 1 ? result.join(' - ') : result[0]}
          </div>
        </div>
      </div>
    </div>
  )
}
