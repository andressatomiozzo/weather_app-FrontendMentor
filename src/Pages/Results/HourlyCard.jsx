import styles from "./HourlyCard.module.css"
import WeatherCode from "../../Components/WeatherCode";


const HourlyCard = ({time, weather_code, temp}) => {
  return (
    <div className={styles.card}>
      <WeatherCode className={styles.weatherCode} weatherCode={weather_code}/>
      <span className={styles.time}>{time}</span>
      <span className={styles.temp}>{temp}º</span>
    </div>
  );
};

export default HourlyCard;
