import React from 'react'
import { useState,useEffect } from 'react';
import { AdvancedMarker,InfoWindow,useMap,useMapsLibrary,toLatLngLiteral } from '@vis.gl/react-google-maps'
// import Places from './Places';
const Marker = ({center}) => {

  const [Places,setPlaces]=useState([])
    const map = useMap()
    const placesLib = useMapsLibrary('places');
    const [placesService, setPlacesService] = useState(null);
  
    useEffect(() => {
      if (!placesLib || !map) return;
      
      // when placesLib is loaded, the library can be accessed via the
      // placesLib API object
      setPlacesService(new placesLib.PlacesService(map));
    }, [placesLib, map]);
    
    var request = {
      location: center,
      radius: '5000', // in meters
      type: ['hospital'] // specify the type of places you want to search for
    };
    function callback(results, status) {
      if (status == placesLib.PlacesServiceStatus.OK) {
        const newPlaces=[]
        for (let i   = 0; i   < results.length; i  ++) {
          newPlaces.push(results[i])  
        }
        setPlaces(newPlaces)
      }
    }
    useEffect(() => {
      if (!placesService) return;
      placesService.nearbySearch(request,callback)
    }, [placesService]);
    
    const [ActiveMarker, setActiveMarker] = useState(null)
    
    const handleMarkerClick= (marker) =>{
      if(marker===ActiveMarker) return;
      setActiveMarker(marker)
    }

    return (<>
    {Places.map(place=>{
      let locs=toLatLngLiteral(place.geometry.location)
      return(<>
      <AdvancedMarker position={locs} key={place.name} onClick={()=>handleMarkerClick(place.name)}/>
      {(ActiveMarker===place.name)?(<InfoWindow position={locs} content={place.name} onCloseClick={()=>setActiveMarker(null)}/>):null}
      </>)
    })}
    </>
  )
}

export default Marker