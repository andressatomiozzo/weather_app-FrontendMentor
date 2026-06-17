import React from "react";
import styles from "./Hourly.module.css";
import SearchContext from "../../contexts/SearchContext";
import HourlyCard from "./HourlyCard";
import useClickOut from "../../Hooks/useClickOut";

const Hourly = () => {
  const { weatherData } = React.useContext(SearchContext);
  const days = weatherData.daily.time.map((date) => new Date(date).toLocaleDateString("en-US", { weekday: "long" }));
  const [activeDay, setActiveDay] = React.useState(
    weatherData.current.time.toLocaleDateString("en-US", { weekday: "long" }),
  );
  const [openMenu, setOpenMenu] = React.useState(false);
  const menuRef = React.useRef();
  useClickOut(menuRef, setOpenMenu);

  const forecast = weatherData.hourly.time.map((time, index) => ({
    time: new Date(time),
    weather_code: weatherData.hourly.weather_code[index],
    temp: Math.trunc(weatherData.hourly.temperature_2m[index]),
  }));

  return (
    <section className={`${styles.section} hourlySection`}>
      <div className={styles.information}>
        <h2 className="subtitle">Hourly forecast</h2>
        <div ref={menuRef}>
          <button className={styles.button} onClick={() => setOpenMenu(!openMenu)}>
            {activeDay}
          </button>
          {openMenu && (
            <div className={styles.options} >
              {days.map((day) => (
                <span key={day} className={styles.option} onClick={() => setActiveDay(day)}>
                  {day}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={styles.cards}>
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
      </div>
    </section>
  );
};

export default Hourly;
