import { useState, useEffect } from 'react';
import './App.css';
import { Api } from './api/api.js';
import { useWeatherData } from './api/api.js';
import Today from './components/Today';
import WeekOverview from './components/WeekOverview';
import Hourly from './components/Hourly';
import WeekForecast from './components/WeekForecast';

function App() {  
  const {weatherData} = useWeatherData();
  const [isTempUnit] = useState(true);

  useEffect(() => {
    
    console.log(weatherData)
  }, [weatherData])

  return (
    <div>
      {Object.keys(weatherData).length > 0 && <Today weatherData={weatherData} isTempUnit={isTempUnit} />}
      {Object.keys(weatherData).length > 0 && <WeekOverview weatherData={weatherData} isTempUnit={isTempUnit} />}
      {Object.keys(weatherData).length > 0 && <Hourly weatherData={weatherData} isTempUnit={isTempUnit} />}
      {Object.keys(weatherData).length > 0 && <WeekForecast weatherData={weatherData} isTempUnit={isTempUnit} />}
    </div>
  );
}

export default App;


//TODO Som användare ska man kunna göra följande:

// - Kunna se följande väderförhållanden för sin nuvarande position:
//* Temperatur
//* Vindstyrka
//* Luftfuktighet
//* Soluppgång och nedgång (klockslag)
//? Välja mellan Farenheit och Celsius
// - Kunna få en väderleksprognos för väderförhållanden (enligt ovan) 5 dagar framåt 
//* Kort översikt för veckan
//* Var tredje timme för nuvarande dygn
//* 5-dagarsprognos
//* Nyttja ett väder-API, t.ex. SMHI, YR.NO, OpenWeatherMaps
//* Nyttja positionering via geolocation i webbläsaren
//? Design/färg & form baserad på weather.com (Länkar till en externa sida.)Länkar till en externa sida. eller liknande applikationer/appar