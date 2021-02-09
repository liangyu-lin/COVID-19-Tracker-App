import React from "react";

import { MapContainer as LeafletMap, TileLayer, useMap } from "react-leaflet";
import "./MapContainer.css";
import { showDataOnMap } from "./util";

function MapContainer({ countries, casesType, center, zoom }) {
  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }
  return (
    <LeafletMap
      className='map'
      casesType={casesType}
      center={center}
      zoom={zoom}
    >
      <ChangeView center={center} zoom={zoom} />
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; < href="http://osm.org/copyright">OpenStreetMap</> contributors'
      />
      {/*draw circles*/}
      {showDataOnMap(countries, casesType)}
    </LeafletMap>
  );
}

export default MapContainer;
