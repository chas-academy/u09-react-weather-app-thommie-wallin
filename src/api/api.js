import { useState, useEffect } from 'react';
import { useGeolocation } from './geolocation';

export const Api = () => {
  const {latitude, longitude, error} = useGeolocation();
  

  return (
    <div>
      latitude: {latitude}<br/>
      longitude: {longitude}<br/>
      error: {error}
    </div>
  )
}
