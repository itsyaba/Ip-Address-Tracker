import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../../App.css"
import IconArrow from "../../assets/icon-location.svg"
interface Props {
  location: string | undefined;
  latlin: [number, number] | undefined;
}

export default function Map({ location, latlin }: Props) {
  function ChangeView({ center }: { center: [number, number] }) {
    const map = useMap();
    map.flyTo(center);
    return null;
  }

  return latlin ? (
    <MapContainer center={[latlin[0], latlin[1]]} zoom={13} scrollWheelZoom={true}>
      <ChangeView center={[latlin[0], latlin[1]]} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[latlin[0], latlin[1]]}
        icon={L.icon({
          iconUrl: IconArrow,
        })}
      >
        <Popup>{location}</Popup>
      </Marker>
    </MapContainer>
  ) : null;
}
