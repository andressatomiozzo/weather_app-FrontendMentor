const DailyCard = ({ temp_max, temp_min, time, weather_code }) => {
  return (
    <div>
      <span>{time}</span>
      <span>{weather_code}</span>
      <span>{temp_max}</span>
      <span>{temp_min}</span>
    </div>
  );
};

export default DailyCard;
