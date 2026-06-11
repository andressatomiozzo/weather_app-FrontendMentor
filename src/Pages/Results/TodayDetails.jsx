import React from 'react'
import styles from "./TodayDetails.module.css"
import SearchContext from '../../createContext/SearchContext';
import TodayDetailsCard from './TodayDetailsCard';

const TodayDetails = () => {
  const { weatherData } = React.useContext(SearchContext);
  const currentWeather = weatherData.current;


  return (
    <div className={styles.todayCards}>
      <TodayDetailsCard title="Feels Like" description={`${Math.trunc(currentWeather.apparent_temperature)}º`} />
      <TodayDetailsCard title="Humidity" description={`${Math.trunc(currentWeather.relative_humidity_2m)}%`} />
      <TodayDetailsCard title="Wind" description={`${Math.trunc(currentWeather.wind_speed_10m)} km/h`} />
      <TodayDetailsCard title="Preciptation" description={`${Math.trunc(currentWeather.precipitation)} mm`} />
    </div>
  )
}

export default TodayDetails
