import React from "react";
import styles from "./TodayMain.module.css";
import SearchContext from "../../createContext/SearchContext";

const TodayMain = () => {
  const { weatherData, cityData } = React.useContext(SearchContext);
  const currentWeather = weatherData.current;
  const currentCity = cityData.results[0];

  return (
    <div className={styles.wrapper}>
      <div className={styles.timeLocation}>
        <span className={styles.location}>
          {currentCity.name}, {currentCity.country}
        </span>
        <span className={styles.data}>
          {currentWeather.time.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>
      <div className={styles.weather}>
        <span className={styles.weatherCode}> {currentWeather.weather_code}</span>
        <span className={styles.temperature}> {Math.trunc(currentWeather.temperature_2m)}º</span>
      </div>
    </div>
  );
};

export default TodayMain;
