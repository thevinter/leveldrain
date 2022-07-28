import React, { useEffect, useState } from 'react'

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

const populateRollTable = (table) => {
  let lines = table.split('\n')
  let header = lines[0].substring(1, lines[0].length - 1).split('|')
  let diceColumns = []
  let totalDice = 0
  for (let i = 0; i < header.length; i += 1) {
    let data = header[i].trim().replaceAll('*', '').toUpperCase()
    if (data === 'D6') {
      diceColumns.push(i)
      totalDice = 6
    }
    if (data === 'D20') {
      diceColumns.push(i)
      totalDice = 20
    }
    if (data === 'D%') {
      diceColumns.push(i)
      totalDice = 100
    }
  }
  diceColumns.push(header.length)
  let values = {}
  for (let i = 2; i < lines.length; i++) {
    let entries = lines[i].substring(1, lines[i].length - 1).split('|')
    for (let col = 0; col < diceColumns.length - 1; col += 1) {
      if (diceColumns[col] === header.length) {
        break
      }
      if (!(entries[diceColumns[col]].trim() in values)) {
        values[entries[diceColumns[col]].trim()] = []
      }
      for (let j = diceColumns[col] + 1; j < diceColumns[col + 1]; j++) {
        values[entries[diceColumns[col]].trim()].push(entries[j].trim())
      }
    }
  }
  const finalDict = {}
  for (const [key, value] of Object.entries(values)) {
    if (key.includes('-')) {
      let values = key.split('-')
      let min = parseInt(values[0])
      let max = parseInt(values[1])
      if (max === 0) max = 100
      for (let i = min; i <= max; i++) {
        finalDict[i] = value
      }
    } else finalDict[parseInt(key)] = value
  }
  return [finalDict, totalDice]
}

const rollTable = (table) => {
  let max = table[1]
  let min = max === 100 ? 0 : 1
  let roll = Math.floor(Math.random() * (max - min + 1)) + min
  if (roll === 0) roll = 100
  let data = table[0]
  console.log(roll, data[roll])
  return data[roll]
}

export default function RollableTable({ debug, input }) {
  const [table, setTable] = useState(generateTable(input))
  const [data, setData] = useState(null)
  const [effect, setEffect] = useState(false)
  useEffect(() => {
    setTable(generateTable(input))
  }, [])
  useEffect(() => {
    setData(populateRollTable(input))
  }, [table])
  const [result, setResult] = useState([''])
  if (debug) {
    console.log(data)
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div dangerouslySetInnerHTML={{ __html: table }} />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button
          onClick={() => {
            setEffect(true)
            setResult(rollTable(data))
          }}
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block rounded bg-slate-100 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-slate-200 hover:shadow-lg focus:bg-slate-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-100 active:shadow-lg"
          style={{ border: '1px solid black', padding: 10 }}
        >
          Press To Generate
        </button>
        <div
          style={{
            alignSelf: 'center',
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
            {result.join(' - ')}
          </div>
        </div>
      </div>
    </div>
  )
}
