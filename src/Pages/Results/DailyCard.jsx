import styles from "./DailyCard.module.css"

const DailyCard = ({ temp_max, temp_min, time, weather_code }) => {
  return (
    <div className={styles.card}>
      <span className={styles.time}>{time}</span>
      <span className={styles.weather_code}>{weather_code}</span>
      <div className={styles.temp}>
        <span className={styles.temp_max}>{temp_max}º</span>
        <span className={styles.temp_min}>{temp_min}º</span>
      </div>
    </div>
  );
};

export default DailyCard;
