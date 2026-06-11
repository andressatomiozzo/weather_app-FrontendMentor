import React from "react";
import styles from "./Daily.module.css"
import SearchContext from "../../createContext/SearchContext";
import DailyCard from "./DailyCard";

const Daily = () => {
  const { weatherData } = React.useContext(SearchContext);

  const forecast = weatherData.daily.time.map((time, index) => ({
    time,
    temp_max: Math.trunc(weatherData.daily.temperature_2m_max[index]),
    temp_min: Math.trunc(weatherData.daily.temperature_2m_min[index]),
    weather_code: weatherData.daily.weather_code[index],
  }));

  return (
    <section>
      <h2 className="subtitle">Daily forecast</h2>
      <div className={styles.cards}>
        {forecast.map((day) => (
          <DailyCard
            key={day.time.getTime()}
            temp_max={day.temp_max}
            temp_min={day.temp_min}
            time={day.time.toLocaleDateString("en-US", {
              weekday: "short",
            })}
            weather_code={day.weather_code}
          />
        ))}
      </div>
    </section>
  );
};

export default Daily;
