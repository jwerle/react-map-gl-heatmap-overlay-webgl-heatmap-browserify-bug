'use strict'
import HeatmapOverlay from 'react-map-gl-heatmap-overlay'
import ReactDOM from 'react-dom'
import React from 'react'
import MapGL from 'react-map-gl'

const Map = (props) => (
  <MapGL>
    <HeatmapOverlay />
  </MapGL>
)

ReactDOM.render(<Map />, document.body)
