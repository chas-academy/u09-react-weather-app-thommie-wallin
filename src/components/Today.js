const Today = (props) => {
  const weatherData = props.weatherData;
  const isTempUnit = props.isTempUnit;
  const sunrise = (new Date(weatherData.current.sunrise * 1000)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const sunset = (new Date(weatherData.current.sunset * 1000)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  // Check if user choose celsius or fahrenheit, temp rounded to one decimal
  const temp = isTempUnit ? (weatherData.current.temp-273.15).toFixed(1) : (((weatherData.current.temp-273.15)*1.8)+32).toFixed(1);

  return (
    <div>
      <h3>The weather today in your current position</h3>
      <ul>
        <li>Temp: {temp} {isTempUnit ? '℃' : '℉'}</li>
        <li>Wind speed: {weatherData.current.wind_speed} m/s</li>
        <li>Humidity: {weatherData.current.humidity} %</li>
        <li>Sunrise/Sunset: {sunrise}/{sunset}</li>
      </ul>
    </div>
  )
}

export default Today