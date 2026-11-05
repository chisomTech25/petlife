import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './LocationMap.css';

// Fix default marker icon issue in Leaflet with React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom colored icons
const createCustomIcon = (color) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="background-color: ${color}; width: 30px; height: 30px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });
};

const petLifeIcon = createCustomIcon('#2d6a4f'); // Green for PetLife
const userIcon = createCustomIcon('#0088cc'); // Blue for user
const landmarkIcon = createCustomIcon('#e74c3c'); // Red for landmarks

// Important places in Nigeria
const nigerianLandmarks = [
  { id: 1, name: "Abuja (Capital)", lat: 9.0579, lng: 7.4951, desc: "Federal Capital Territory" },
  { id: 2, name: "Kano", lat: 12.0022, lng: 8.5920, desc: "Ancient city, commerce hub" },
  { id: 3, name: "Port Harcourt", lat: 4.8156, lng: 7.0498, desc: "Oil city, Rivers State" },
  { id: 4, name: "Ibadan", lat: 7.3775, lng: 3.9470, desc: "Largest city by area" },
  { id: 5, name: "Benin City", lat: 6.3350, lng: 5.6037, desc: "Edo State, historical city" },
  { id: 6, name: "Maiduguri", lat: 11.8333, lng: 13.1500, desc: "Borno State capital" },
  { id: 7, name: "Zaria", lat: 11.1111, lng: 7.7227, desc: "Kaduna State, education hub" },
  { id: 8, name: "Aba", lat: 5.1066, lng: 7.3667, desc: "Abia State, commercial city" },
  { id: 9, name: "Jos", lat: 9.9285, lng: 8.8921, desc: "Plateau State, tourism" },
  { id: 10, name: "Ilorin", lat: 8.5000, lng: 4.5500, desc: "Kwara State capital" },
  { id: 11, name: "Enugu", lat: 6.4403, lng: 7.4914, desc: "Coal city, Enugu State" },
  { id: 12, name: "Abeokuta", lat: 7.1475, lng: 3.3619, desc: "Ogun State capital" },
];

// Component to fly to user location
const FlyToUser = ({ userLocation }) => {
  const map = useMap();
  useEffect(() => {
    if (userLocation) {
      map.flyTo([userLocation.lat, userLocation.lng], 13, { duration: 2 });
    }
  }, [userLocation, map]);
  return null;
};

const LocationMap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState('');
  const [loading, setLoading] = useState(true);

  // PetLife location (Lagos)
  // PetLife location (Abuja)
  const petLifeLocation = { lat: 9.0354, lng: 7.4898, name: "PetLife HQ - Abuja" };
  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          setLocationError('Location access denied. Showing default view.');
          setLoading(false);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      setLocationError('Geolocation not supported by your browser.');
      setLoading(false);
    }
  }, []);

  // Center map between Lagos and user location, or just Lagos
  const center = userLocation
    ? [(petLifeLocation.lat + userLocation.lat) / 2, (petLifeLocation.lng + userLocation.lng) / 2]
    : [petLifeLocation.lat, petLifeLocation.lng];

  const zoom = userLocation ? 6 : 6;

  return (
    <div className="location-map-container">
      <div className="map-header">
        <h3>📍 Our Location & Important Places</h3>
        {loading && <p className="map-status">🔍 Detecting your location...</p>}
        {locationError && <p className="map-error">⚠️ {locationError}</p>}
        {userLocation && (
          <p className="map-status success">
            ✅ Your location detected! Click the blue marker for details.
          </p>
        )}
      </div>

      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '450px', width: '100%', borderRadius: '12px' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

                {/* PetLife Marker */}
        <Marker position={[petLifeLocation.lat, petLifeLocation.lng]} icon={petLifeIcon}>
          <Popup>
            <div className="map-popup">
              <strong>🐾 PetLife HQ</strong><br />
              Area 3, Garki, FCT Abuja, Nigeria<br />
              📞 +234 913 422 2588<br />
              <em>Main Office</em>
            </div>
          </Popup>
        </Marker>

        {/* User Location Marker */}
        {userLocation && (
          <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
            <Popup>
              <div className="map-popup">
                <strong>📍 You are here!</strong><br />
                Your current location<br />
                <em>Lat: {userLocation.lat.toFixed(4)}, Lng: {userLocation.lng.toFixed(4)}</em>
              </div>
            </Popup>
          </Marker>
        )}

        {/* Nigerian Landmarks */}
        {nigerianLandmarks.map((place) => (
          <Marker key={place.id} position={[place.lat, place.lng]} icon={landmarkIcon}>
            <Popup>
              <div className="map-popup">
                <strong>{place.name}</strong><br />
                {place.desc}
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Fly to user when location detected */}
        {userLocation && <FlyToUser userLocation={userLocation} />}
      </MapContainer>

      {/* Legend */}
      <div className="map-legend">
        <div className="legend-item">
          <span className="legend-dot" style={{ background: '#2d6a4f' }}></span>
          <span>PetLife HQ (Abuja)</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ background: '#0088cc' }}></span>
          <span>Your Location</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ background: '#e74c3c' }}></span>
          <span>Important Places in Nigeria</span>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;