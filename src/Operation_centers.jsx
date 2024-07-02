import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Marker from './components/Marker';
import { useJsApiLoader} from '@react-google-maps/api';
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import { useGeolocated } from "react-geolocated";



const Operation_centers = () => {

  
 
  const { isLoaded } = useJsApiLoader({
      id:  import.meta.env.VITE__MAP_API,
      googleMapsApiKey:  import.meta.env.VITE__MAP_API
    })

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });
    
    const userLocation = coords?{
      lat: coords.latitude,
      lng: coords.longitude
    }:{
      lat:25.2425,
      lng: 86.9842
    };
    

  return isLoaded? (
    <>
    <Navbar/>
    <div className="h-lvh">
      <APIProvider apiKey={import.meta.env.VITE__MAP_API}>
      <Map
        defaultZoom={15}
        defaultCenter={userLocation}
        mapId={import.meta.env.VITE__MAP_ID}
        >
        <Marker center={userLocation} />
      </Map>
      </APIProvider>
    </div>
    </>
  ) : <>Loading Error</>
}

export default Operation_centers