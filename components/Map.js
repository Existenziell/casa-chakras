/* eslint-disable react-hooks/exhaustive-deps */
// https://github.com/naomigrace/nextjs-with-mapbox-gl-js/blob/master/pages/index.js
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { initializeMap } from '../lib/map/initializeMap'
import { addDataLayer } from '../lib/map/addDataLayer'
import { COORDS, ZOOM } from '../lib/config'
import 'mapbox-gl/dist/mapbox-gl.css'

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

const MapComponent = ({ i18n }) => {
  const router = useRouter()
  const [Map, setMap] = useState()
  const [pageIsMounted, setPageIsMounted] = useState(false)
  const translations = i18n.map

  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

  const location = {
    type: "FeatureCollection",
    features: [
      {
        properties: {
          cluster: false,
        },
        geometry: {
          type: "Point",
          coordinates: COORDS
        }
      }
    ]
  }

  useEffect(() => {
    setPageIsMounted(true)

    // Use proper light/dark map theme
    let mapTheme = 'light'
    if (localStorage?.theme === 'dark') {
      mapTheme = 'dark'
    }

    const map = new mapboxgl.Map({
      container: 'map',
      // style: 'mapbox://styles/mapbox/dark-v10',
      // style: 'mapbox://styles/mapbox/light-v10',
      style: `mapbox://styles/mapbox/${mapTheme}-v10`,
      center: COORDS,
      zoom: ZOOM,
    })

    initializeMap(map, translations)
    setMap(map)
  }, [router.query.location])

  useEffect(() => {
    if (pageIsMounted) {
      Map.on('load', () => {
        addDataLayer(Map, location)
      })
    }
  }, [pageIsMounted, setMap, Map])

  return (
    <div id='map' className='w-full h-[calc(75vh)]' />
  )
}

export default MapComponent
