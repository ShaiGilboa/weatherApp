import React, { useEffect, useState } from 'react';
import { getStartLocationWithPermission } from '../helpers.geoLocation';

export interface Location {
  status: number,
  lat?: number,
  lon?: number,
}



function App() {
  const [location, setLocation] = useState<Location | null>(null)
  useEffect(()=>{
    getStartLocationWithPermission(setLocation)
  },[])
  
  useEffect(()=>{
    if(location) {
      if(location.status === 200) {
        console.log('we have location!')
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&units=metric&exclude={minutely}&appid=${process.env.REACT_APP_API_KEY}`)
          .then(res => res.json())
          .then(res => console.log('res', res))
      } else if(location.status === 401) {
        console.log('access to location blocked')
      }
    } else {
      console.log('waiting for user to respond to location request')
    }
  },[location])
  return (
    <div>App</div>
  );
}

export default App;
