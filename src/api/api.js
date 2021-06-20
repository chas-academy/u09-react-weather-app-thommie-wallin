import { useState, useEffect } from 'react';
import { useGeolocation } from './geolocation';

export const Api = () => {
  const {latitude, longitude, error} = useGeolocation();
  const {weatherData, setWeatherData} = useState();
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    
console.log(process.env.REACT_APP_WEATHER_API_KEY)
  }, [])

  return (
    <div>
      latitude: {latitude}<br/>
      longitude: {longitude}<br/>
      error: {error}
    </div>
  )
}
