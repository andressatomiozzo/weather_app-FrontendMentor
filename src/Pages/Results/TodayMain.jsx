import React from "react";
import SearchContext from "../../createContext/SearchContext";

const TodayMain = () => {
  const { weatherData, cityData } = React.useContext(SearchContext);
  const currentWeather = weatherData.current;
  const currentCity = cityData.results[0];

  return (
    <div>
      <span>
        Cidade: {currentCity.name}, {currentCity.country}
      </span>
      <span> Data:
        {currentWeather.time.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </span>
      <span>Temperatura: {Math.trunc(currentWeather.temperature_2m)}</span>
      <span>Código: {currentWeather.weather_code}</span>
    </div>
  );
};

export default TodayMain;
