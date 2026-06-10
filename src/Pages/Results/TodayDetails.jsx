import React from 'react'
import SearchContext from '../../createContext/SearchContext';
import TodayDetailsCard from './TodayDetailsCard';

const TodayDetails = () => {
  const { weatherData } = React.useContext(SearchContext);
  const currentWeather = weatherData.current;


  return (
    <div>
      <TodayDetailsCard title="Fells Like" description={Math.trunc(currentWeather.apparent_temperature)} />
      <TodayDetailsCard title="Humidity" description={Math.trunc(currentWeather.relative_humidity_2m)} />
      <TodayDetailsCard title="Wind" description={Math.trunc(currentWeather.wind_speed_10m)} />
      <TodayDetailsCard title="Preciptation" description={Math.trunc(currentWeather.precipitation)} />
    </div>
  )
}

export default TodayDetails
