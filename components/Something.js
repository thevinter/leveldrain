import React, { useEffect, useState } from 'react'
import Select from 'react-dropdown-select'

export default function Something() {
  const [options, setOptions] = useState([
    {
      id: '07bcbc70-4a42-4b7b-9082-c1d4bd5c89dd',
      name: 'Lane Daniel',
      username: 'Meggie_Littel',
      email: 'Haven_Kulas@hotmail.com',
      address: {
        street: 'Ignatius Expressway',
        suite: 51116,
        city: 'North Hulda',
        zipcode: '84647',
        geo: {
          lat: '45.0145',
          lng: '-84.7381',
        },
      },
      phone: '794-007-9114 x570',
      website: 'friedrich.biz',
      company: {
        name: 'Volkman - Stroman',
        catchPhrase: 'Multi-tiered actuating knowledge user',
        bs: 'killer deploy users',
      },
    },
  ])
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <Select options={options} values={[]} onChange={(value) => console.log(value)} />
        </div>
      </div>
    </div>
  )
}
