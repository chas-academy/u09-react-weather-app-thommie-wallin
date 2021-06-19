import { useState, useEffect } from 'react';
import './App.css';

function App() {  
  const [location, setLocation] = useState(null)

  useEffect(() => {
    if('geolocation' in navigator) {
      if (!location) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLocation([position.coords.latitude, position.coords.longitude]);
        });
      }
    } else {
      /* geolocation IS NOT available */
    }
  })

  console.log(location)

  return (
    <div>
      <h1>{location}</h1>
    </div>
  );
}

export default App;
