const WeekOverview = (props) => {
  const weatherData = props.weatherData;
  const isTempUnit = props.isTempUnit;
  const imgUrl = 'http://openweathermap.org/img/wn/'
  
  // Get dates and weekdays
  const date = new Date();
  const dateArr = [{},{},{},{}];
  const weekDayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = dateArr.map(d => {
    date.setDate(date.getDate() + 1)
    const weekDay = weekDayArr[date.getDay()]
    return d = {day: weekDay, date: date.getDate()}
  })

  // Get temperatures
  const temps = weatherData.daily.map(t => {
    // Check if user choose celsius or fahrenheit, temp rounded to one decimal and parsed into an integer.
    const temperature = isTempUnit ? parseFloat((t.temp.day-273.15).toFixed(1)) : parseFloat((((t.temp.day-273.15)*1.8)+32).toFixed(1));
    return temperature;  
  })

  // Get todays temp and check if user choose celsius or fahrenheit, temp rounded to one decimal.
  const tempToday = isTempUnit ? parseFloat((weatherData.current.temp-273.15).toFixed(1)) : parseFloat((((weatherData.current.temp-273.15)*1.8)+32).toFixed(1));

  return (
    <div>
      <h3>Week overview</h3>
      <ul>
        <li>
          Today {tempToday} {isTempUnit ? '℃' : '℉'} <img src={imgUrl + weatherData.daily[0].weather[0].icon + '.png'}  alt="" />
        </li>
        <li>
          {dates[0].day} {dates[0].date} {temps[1]} {isTempUnit ? '℃' : '℉'} <img src={imgUrl + weatherData.daily[1].weather[0].icon + '.png'}  alt="" />
        </li>
        <li>
          {dates[1].day} {dates[1].date} {temps[2]} {isTempUnit ? '℃' : '℉'} <img src={imgUrl + weatherData.daily[2].weather[0].icon + '.png'}  alt="" />
        </li>
        <li>
          {dates[2].day} {dates[2].date} {temps[3]} {isTempUnit ? '℃' : '℉'} <img src={imgUrl + weatherData.daily[3].weather[0].icon + '.png'}  alt="" />
        </li>
        <li>
          {dates[3].day} {dates[3].date} {temps[4]} {isTempUnit ? '℃' : '℉'} <img src={imgUrl + weatherData.daily[4].weather[0].icon + '.png'}  alt="" />
        </li>
      </ul>
    </div>
  )
}

export default WeekOverview
