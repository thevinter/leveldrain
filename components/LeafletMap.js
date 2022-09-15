import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { CRS, LatLngBounds } from 'leaflet'
import { useEffect, useRef, useState } from 'react'

const LeafletMap = () => {
  //Change this to match the highest number tile you generated
  const ZOOM_LEVELS = 7
  //Change this to the zoom level you wish to start on
  const STARTING_ZOOM = 2
  //Change this to the focal point of your map
  const CENTER_POINT = [0, 0]

  const [currentZoom, setZoomLevel] = useState(STARTING_ZOOM)
  const updateZoom = (newZoomLevel) => setZoomLevel(newZoomLevel)

  const [coords, setCoords] = useState([0, 0])
  const updateCoords = (coords) => setCoords(coords)
  const map = useRef(null)
  useEffect(() => {
    if (map.current) {
      const northEast = map.current.unproject([3775, 0], map.current.getMaxZoom())
      const southWest = map.current.unproject([0, 4374], map.current.getMaxZoom())
      map.current.setMaxBounds(new LatLngBounds(southWest, northEast))
    }
  })
  return (
    <MapContainer
      center={CENTER_POINT}
      minZoom={1}
      ref={map}
      zoom={1}
      scrollWheelZoom={true}
      style={{ backgroundColor: 'white', height: '100vh', width: '100%' }}
      maxZoom={ZOOM_LEVELS}
      attributionControl={false}
    >
      <TileLayer url="/static/images/campaign_tiles/{z}/map_{x}_{y}.png" noWrap tileSize={256} />
    </MapContainer>
  )
}

export default LeafletMap
