import CharacterTimeline from '@/components/CharacterTimeline'
import moment from 'moment'
import { useEffect } from 'react'

const characters = [
  {
    name: 'Tabudai',
    location: 'Sukut Nabir',
    events: [],
  },
  {
    name: 'Tarlandur',
    location: 'Sukut Nabir',
    events: [],
  },
  {
    name: 'Elmo',
    location: 'Sukut Nabir',
    events: [],
  },
  {
    name: 'Furnok',
    location: 'Sukut Nabir',
    events: [],
  },
  {
    name: 'Grambir',
    location: 'Fishtool',
    events: [
      {
        start: moment('09-27-2022'),
        end: moment('10-01-2022'),
        action: 'Traveling back and forth between Fishtool and Smallhill',
      },
    ],
  },
  {
    name: "Ak'Ozar",
    location: 'Fishtool',
    events: [
      {
        start: moment('09-27-2022'),
        end: moment('10-01-2022'),
        action: 'Traveling back and forth between Fishtool and Smallhill',
      },
    ],
  },
  {
    name: 'Johan th Young',
    location: 'Smallhill',
    events: [
      {
        start: moment('09-27-2022'),
        end: moment('10-01-2022'),
        action: 'Traveling to Smallhill',
      },
    ],
  },
  {
    name: 'Mezlosses',
    location: 'Fishtool',
    events: [
      {
        start: moment('09-27-2022'),
        end: moment('10-01-2022'),
        action: 'Traveling back and forth between Fishtool and Smallhill',
      },
    ],
  },
  {
    name: 'Azores',
    location: 'Amundfort',
    events: [],
  },
  {
    name: "George 'Il Lanario'",
    location: 'Amundfort',
    events: [],
  },
  {
    name: 'Lomzek',
    location: 'Amundfort',
    events: [],
  },
  {
    name: 'Tata Wigstan',
    location: 'Amundfort',
    events: [],
  },
  {
    name: 'Wejkloj',
    location: 'Cyndicea',
    events: [
      {
        start: moment('09-16-2022'),
        end: moment('09-18-2022'),
        action: 'Resting in Cyndicea',
      },
    ],
  },
  {
    name: 'Fisfurfas',
    location: 'Cyndicea',
    events: [
      {
        start: moment('09-16-2022'),
        end: moment('09-18-2022'),
        action: 'Resting in Cyndicea',
      },
    ],
  },
  {
    name: 'Nikyonna',
    location: 'Cyndicea',
    events: [
      {
        start: moment('09-16-2022'),
        end: moment('09-18-2022'),
        action: 'Resting in Cyndicea',
      },
    ],
  },
  {
    name: 'Onkfinner',
    location: 'Cyndicea',
    events: [
      {
        start: moment('09-16-2022'),
        end: moment('09-18-2022'),
        action: 'Resting in Cyndicea',
      },
    ],
  },
]

const getFantasyDate = () => {
  const month = moment().month()
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
  return `${moment().date()} of ${months[month]} - ${moment().year() - 1431}`
}

export default function Calendar() {
  const displayedChars = characters.map((el) => <CharacterTimeline key={el.name} character={el} />)
  return (
    <div>
      <div className="text-xl">Current Day: {getFantasyDate()}</div>
      <div>{displayedChars}</div>
    </div>
  )
}
