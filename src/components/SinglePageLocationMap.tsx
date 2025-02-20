import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { FaMapMarkerAlt, FaDirections, FaExpandAlt } from 'react-icons/fa';

type LocationMapProps = {
  latitude: number;
  longitude: number;
  address: string;
  title: string;
  propertyId: number;
};

// Fix the default icon issue in Leaflet
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const LocationMap = ({ latitude, longitude, address, title, propertyId }: LocationMapProps) => {

  const openDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`, '_blank');
  };


  const openFullscreenMap = () => {
    window.open(`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}&zoom=15`, '_blank');
  };

  return (
    <div className="rounded-lg overflow-hidden relative h-64 border border-gray-200">



      <MapContainer
        center={[latitude, longitude]}
        zoom={20}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
        className='z-0'
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[latitude, longitude]}
        >
          <Popup className="p-0 w-auto">
            <div className="p-2">
              <h6 className="font-medium text-sm">{title}</h6>
              <p className="text-xs text-gray-600 mt-1">{address}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Small caption below map */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-xs flex items-center">
        <FaMapMarkerAlt className="mr-1" size={12} />
        <span className="truncate">{address}</span>
      </div>
    </div>
  );
};

export default LocationMap;