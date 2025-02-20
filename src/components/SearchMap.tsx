import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { propertyCard } from '../types/propertyCard';
import { Link } from 'react-router';

type SearchMapProps = {
  properties: propertyCard[];
};

// Fix the default icon issue in Leaflet
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const SearchMap = (props: SearchMapProps) => {
  const properties: propertyCard[] = props.properties;

  return (
    <div className="h-full w-full relative">
      <MapContainer
        center={[properties[3].latitude, properties[3].longitude]}
        zoom={9}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {properties.map((property: propertyCard) => (
          <Marker
            key={property.id}
            position={[property.latitude, property.longitude]}
          >
            <Popup className="p-0 w-auto">
              <div className="flex gap-5">
                <img
                  src={property.img}
                  alt=""
                  className="w-16 h-12 object-cover rounded"
                />
                <div className="flex flex-col justify-between">
                  <Link to={`/${property.id}`}>{property.title}</Link>
                  <span>{property.address}</span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default SearchMap
