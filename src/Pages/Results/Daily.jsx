import React from "react";
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
    <div>
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
  );
};

export default Daily;
