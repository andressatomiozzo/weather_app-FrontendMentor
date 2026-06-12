import React from "react";
import styles from "./TodayDetails.module.css";
import SearchContext from "../../createContext/SearchContext";
import TodayDetailsCard from "./TodayDetailsCard";
import SystemContext from "../../createContext/SystemContext";

const TodayDetails = () => {
  const { weatherData } = React.useContext(SearchContext);
  const currentWeather = weatherData.current;
  const { metricSystem } = React.useContext(SystemContext);

  return (
    <section className={styles.todayCards}>
      <TodayDetailsCard title="Feels Like" description={`${Math.trunc(currentWeather.apparent_temperature)}º`} />
      <TodayDetailsCard title="Humidity" description={`${Math.trunc(currentWeather.relative_humidity_2m)}%`} />
      <TodayDetailsCard title="Wind" description={`${Math.trunc(currentWeather.wind_speed_10m)} ${metricSystem ? "km/h" : 'mph'}`} />
      <TodayDetailsCard title="Preciptation" description={`${Math.trunc(currentWeather.precipitation)} ${metricSystem ? "mm" : 'in'}`} />
    </section>
  );
};

export default TodayDetails;
