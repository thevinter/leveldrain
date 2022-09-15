import moment from 'moment'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const getFantasyDate = (date) => {
  const month = date.month()
  const months = {
    0: 'Fireseek',
    1: 'Readying',
    2: 'Coldeven',
    3: 'Planting',
    4: 'Flocktime',
    5: 'Wealsun',
    6: 'Reaping',
    7: 'Goodmonth',
    8: 'Harvester',
    9: 'Patchwall',
    10: "Ready'reat",
    11: 'Sunsebb',
  }
  return `${date.date()}th of ${months[month]} - ${date.year() - 1431}`
}

export default function CharacterTimeline({ character }) {
  const [currentEvent, setEvent] = useState(null)
  const [now, setNow] = useState(null)
  const [end, setEnd] = useState(null)
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    if (currentEvent) {
      setEnd(currentEvent.end.unix() - currentEvent.start.unix())
      setNow(moment().unix() - currentEvent.start.unix())
    }
  }, [currentEvent])
  useEffect(() => {
    character.events.forEach((element) => {
      console.log(element.start)
      if (element.start < moment.now() && element.end > moment.now()) {
        setEvent(element)
      }
    })
  }, [character])

  return (
    <div
      style={{
        border: '1px solid black',
        padding: 10,
        marginTop: 10,
        height: 'auto',
        transition: 'height 4s',
      }}
    >
      <div>
        <b>Name:</b> {character.name}
      </div>
      <div>
        <b>Currently:</b> {currentEvent ? currentEvent.action : `Idle in ${character.location}`}
        {currentEvent && (
          <>
            <div style={{ marginTop: 30, position: 'relative' }}>
              <progress
                id="file"
                style={{ width: '100%', background: 'red' }}
                value={now}
                max={end}
              ></progress>

              <div
                style={{
                  position: 'absolute',
                  top: -33,
                  left: `calc(${(now / end) * 100}% - 27px)`,
                }}
              >
                <Image
                  style={{ paddingLeft: -10 }}
                  src="/static/images/walking.gif"
                  height={50}
                  width={50}
                />
              </div>
            </div>
            <div>From the {getFantasyDate(currentEvent.start)}</div>
            <div>To the {getFantasyDate(currentEvent.end)}</div>
          </>
        )}
      </div>
      {character.events && character.events.length > 1 && (
        <div className="underline underline-offset-4" onClick={() => setShowMore((s) => !s)}>
          {`${showMore ? '-' : '+'}`} show {`${showMore ? 'less' : 'more'} past events`}
        </div>
      )}
      {showMore && (
        <ul className="list-disc pl-5">
          {character.events.map((event) => (
            <li key={event.action} className="list-item">
              {event.action}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
