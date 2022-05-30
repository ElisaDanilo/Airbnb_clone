import React from 'react';
// import "rc-tabs/assets/index.css";
import "./ParisMap.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
// import houseIcon from "../assets/icons/house.png";

const ParisMap = () => {
    const position = [51.505, -0.09]
    const customMarker = new L.icon({
        iconUrl: '../assets/icons/house.png',
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40]
      });

  return (
    <div>
  <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "70vh" }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap </a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker icon={customMarker} position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
        </Marker>
  </MapContainer>,
    </div>
  )
}

export default ParisMap