import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

const Main = () => {


  const [map, setMap] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [colleges, setColleges] = useState([]);

  const handleMapLoad = (map) => {
    setMap(map);
  };

  const handleMarkerClick = (place) => {
    setSelectedPlace(place);
  };

  const handleCloseInfoWindow = () => {
    setSelectedPlace(null);
  };

  const fetchColleges = async (latitude, longitude) => {
    const apiKey = 'YOUR_COLLEGE_DATA_API_KEY';
    const url = `https://api.example.com/colleges?lat=${latitude}&lng=${longitude}&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setColleges(data);
    } catch (error) {
      console.error('Error fetching college data:', error);
    }
  };

  const handleMapClick = (event) => {
    const latitude = event.latLng.lat();
    const longitude = event.latLng.lng();
    fetchColleges(latitude, longitude);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchColleges(latitude, longitude);
        },
        (error) => {
          console.error('Error getting current position:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (

    <GoogleMap
      onLoad={handleMapLoad}
      onClick={handleMapClick}
      mapContainerStyle={{ height: '400px', width: '100%' }}
      options={{ zoom: 10, center: { lat: 0, lng: 0 } }}
    >
      {colleges.map((college) => (
        <Marker
          key={college.id}
          position={{ lat: college.latitude, lng: college.longitude }}
          onClick={() => handleMarkerClick(college)}
        />
      ))}

      {selectedPlace && (
        <InfoWindow
          position={{ lat: selectedPlace.latitude, lng: selectedPlace.longitude }}
          onCloseClick={handleCloseInfoWindow}
        >
          <div>
            <h3>{selectedPlace.name}</h3>
            <p>{selectedPlace.address}</p>
            {/* Add more college details here */}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default Main;