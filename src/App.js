import { useState, useEffect } from 'react';
import './App.css';
import { Api } from './api/api.js';
import { useWeatherData } from './api/api.js';

function App() {  
  const {weatherData, setWeatherData} = useWeatherData();

  useEffect(() => {
    
    console.log(weatherData)
  }, [weatherData])

  // const getWeatherData = () => {
  //   setWeatherData()
  // }

  // const fetchTask = () => {
  //   const res = useWeatherData()
  //   console.log(res)
  //   return res;
  // }

  return (
    <div>
      {/* {location && <h1>{location}</h1>} */}
      
      {/* <Api /> */}
    </div>
  );
}

// function fetchWeatherData(props) {
//   const {weatherData, setWeatherData} = useWeatherData();
//   console.log(weatherData)
// }

export default App;
