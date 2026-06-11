import styles from "./HourlyCard.module.css"

const HourlyCard = ({time, weather_code, temp}) => {
  return (
    <div className={styles.card}>
      <span className={styles.weather_code}>{weather_code}</span>
      <span className={styles.time}>{time}</span>
      <span className={styles.temp}>{temp}º</span>
    </div>
  );
};

export default HourlyCard;
