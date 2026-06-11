import React from "react";
import SearchContext from "../../createContext/SearchContext";
import HourlyCard from "./HourlyCard";

const Hourly = () => {
  const { weatherData } = React.useContext(SearchContext);
  const days = weatherData.daily.time.map((date) => new Date(date).toLocaleDateString("en-US", { weekday: "long" }));
  const [activeDay, setActiveDay] = React.useState(
    weatherData.current.time.toLocaleDateString("en-US", { weekday: "long" }),
  );
  const [openMenu, setOpenMenu] = React.useState(false);

  const forecast = weatherData.hourly.time.map((time, index) => ({
    time: new Date(time),
    weather_code: weatherData.hourly.weather_code[index],
    temp: Math.trunc(weatherData.hourly.temperature_2m[index]),
  }));

  return (
    <section>
      <h2 className="subtitle">Hourly forecast</h2>
      <button onClick={() => setOpenMenu(!openMenu)}>{activeDay}</button>
      {openMenu &&
        days.map((day) => (
          <span key={day} onClick={() => setActiveDay(day)}>
            {day}
          </span>
        ))}

      {forecast.map((hour) => {
        const day = hour.time.toLocaleDateString("en-US", { weekday: "long" });

        if (day !== activeDay) return null;

        return (
          <HourlyCard
            key={hour.time.getTime()}
            time={hour.time.toLocaleTimeString("en-US", { hour: "numeric", hour12: true })}
            weather_code={hour.weather_code}
            temp={hour.temp}
          />
        );
      })}
    </section>
  );
};

export default Hourly;
