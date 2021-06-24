import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import { Api } from './api/api.js';
import { useWeatherData } from './api/api.js';
import Today from './components/Today';
import WeekOverview from './components/WeekOverview';
import Hourly from './components/Hourly';
import WeekForecast from './components/WeekForecast';

function App() {  
  const {weatherData} = useWeatherData();
  const [isTempUnit, setIsTempUnit] = useState(true);

  // Toggle temperature unit
  const toggleUnit = () => {
    setIsTempUnit(
      isTempUnit ? false : true
    )
  }

  // useEffect(() => {
    
  //   console.log(isTempUnit)
  // }, [isTempUnit])

  return (
    <Router>
      <div>
        <h1>u09 Weather App</h1>
        <button onClick={toggleUnit}>
          Change {isTempUnit ? '℃' : '℉'}
        </button>
        <ul>
          <li><Link to="/">Today</Link></li>
          <li><Link to="/hourly">Hourly</Link></li>
          <li><Link to="/fiveday">5 day</Link></li>
        </ul>
        <div className="content">
          <Switch>
            <Route exact path="/">
              {Object.keys(weatherData).length > 0 && <Today weatherData={weatherData} isTempUnit={isTempUnit} />}
              {Object.keys(weatherData).length > 0 && <WeekOverview weatherData={weatherData} isTempUnit={isTempUnit} />}
            </Route>
            <Route path="/hourly">
              {Object.keys(weatherData).length > 0 && <Hourly weatherData={weatherData} isTempUnit={isTempUnit} />}
            </Route>
            <Route path="/fiveday">
              {Object.keys(weatherData).length > 0 && <WeekForecast weatherData={weatherData} isTempUnit={isTempUnit} />}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;


//TODO Som användare ska man kunna göra följande:

// - Kunna se följande väderförhållanden för sin nuvarande position:
//* Temperatur
//* Vindstyrka
//* Luftfuktighet
//* Soluppgång och nedgång (klockslag)
//* Välja mellan Farenheit och Celsius
// - Kunna få en väderleksprognos för väderförhållanden (enligt ovan) 5 dagar framåt 
//* Kort översikt för veckan
//* Var tredje timme för nuvarande dygn
//* 5-dagarsprognos
//* Nyttja ett väder-API, t.ex. SMHI, YR.NO, OpenWeatherMaps
//* Nyttja positionering via geolocation i webbläsaren
//* Routing 
//? Design/färg & form baserad på weather.com (Länkar till en externa sida.)Länkar till en externa sida. eller liknande applikationer/appar