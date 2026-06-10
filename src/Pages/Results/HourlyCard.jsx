const HourlyCard = ({time, weather_code, temp}) => {
  return (
    <div>
      <span>Hora:{time}</span>
      <span>Tempo:{weather_code}</span>
      <span>Temperatura:{temp}</span>
    </div>
  );
};

export default HourlyCard;
