import dynamic from 'next/dynamic'
import { components } from 'react-select'

export default function Map() {
  const LeafletMap = dynamic(() => import('components/LeafletMap'), { ssr: false })
  return (
    <div>
      <LeafletMap />
    </div>
  )
}
