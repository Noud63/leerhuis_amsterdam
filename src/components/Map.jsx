import React from "react";
import { Marker, TileLayer, MapContainer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import shadow from "leaflet/dist/images/marker-shadow.png";
// import "./Map.css";
import marker from "../assets/icons/marker2.png"

const Map = () => {
  const positionMap = [52.361719, 4.92455];
  const positionMarker = [52.361719, 4.92455];

  const icon = new L.Icon({
    iconUrl: marker,
    shadowUrl: shadow,
    iconSize: [35, 50],
    shadowSize: [80, 54],
    shadowAnchor: [25, 40],
  });

  return (
    <MapContainer
      center={positionMap}
      zoom={12}
      scrollWheelZoom={true}
      style={{ height: "357px" }}
    >
      <TileLayer
        attribution='<a href="https://www.openstreetmap.org">&copy; OpenStreetMap</a>'
        url="https://api.mapbox.com/styles/v1/noud/clsj06iyn009w01qucnp8eqwb/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoibm91ZCIsImEiOiJjanYyY205MjExbW82M3ptMjVxd21ma2w2In0.rpsoE0GNWh9fWdkNikufxg"
      />
      <Marker position={positionMarker} icon={icon}></Marker>
    </MapContainer>
  );
};

export default Map;

