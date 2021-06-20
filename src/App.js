import { useState, useEffect } from 'react';
import './App.css';
import './api/api.js';
import {useGeolocation} from './api/geolocation';
import { Api } from './api/api.js';

function App() {  

  useEffect(() => {

  }, [])

  // console.log(location)

  return (
    <div>
      {/* {location && <h1>{location}</h1>} */}
      
      <Api />
    </div>
  );
}

export default App;
