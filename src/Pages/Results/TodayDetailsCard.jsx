import styles from "./TodayDetailsCard.module.css"

const TodayDetailsCard = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
    </div>
  );
};

export default TodayDetailsCard;
