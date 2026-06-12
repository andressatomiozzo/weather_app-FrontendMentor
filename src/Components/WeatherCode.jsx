import Sunny from "../assets/webp/icon-sunny.webp";
import PartlyCloudy from "../assets/webp/icon-partly-cloudy.webp";
import Overcast from "../assets/webp/icon-overcast.webp";
import Fog from "../assets/webp/icon-fog.webp";
import Drizzle from "../assets/webp/icon-drizzle.webp";
import Rain from "../assets/webp/icon-rain.webp";
import Storm from "../assets/webp/icon-storm.webp";
import Snow from "../assets/webp/icon-snow.webp";

const WeatherCode = ({ weatherCode, className }) => {
  switch (weatherCode) {
    case 0:
    case 1:
      return <img src={Sunny} alt="Clear sky" className={className} />;

    case 2:
      return <img src={PartlyCloudy} alt="Partly Cloudy" className={className} />;

    case 3:
      return <img src={Overcast} alt="Overcast" className={className} />;

    case 45:
      return <img src={Fog} alt="Fog" className={className} />;

    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return <img src={Drizzle} alt="Drizzle" className={className} />;

    case 61:
    case 63:
    case 65:
    case 80:
    case 81:
    case 82:
    case 66:
    case 67:
      return <img src={Rain} alt="Rain" className={className} />;

    case 95:
    case 96:
    case 99:
      return <img src={Storm} alt="Storm" className={className} />;

    case 77:
    case 85:
    case 86:
    case 71:
    case 73:
    case 75:
      return <img src={Snow} alt="Snow" className={className} />;
  }
};

export default WeatherCode;
