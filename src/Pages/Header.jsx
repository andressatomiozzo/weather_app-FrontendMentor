import React from "react";
import Logo from "../assets/svg/logo.svg?react";
import styles from "./Header.module.css";
import SystemContext from "../createContext/SystemContext";

const Header = () => {
  const [btnActive, setBtnActive] = React.useState(false);
  const { metricSystem, setMetricSystem } = React.useContext(SystemContext);

  const handleClick = () => {
    const newValue = !metricSystem;

    setMetricSystem(newValue);
    localStorage.setItem("metricSystem", JSON.stringify(newValue));
  };

  return (
    <header>
      <Logo />
      <button onClick={() => setBtnActive(!btnActive)}>Units</button>
      {btnActive && (
        <div>
          <button onClick={handleClick}>{metricSystem ? "Switch do Imperial" : "Switch do Metric"}</button>
          <div>
            <span className={styles.optionTitle}>Temperature</span>
            <span className={`${styles.option()} ${metricSystem ? styles.active : ""}`}>Celsius (ºC)</span>
            <span className={`${styles.option} ${metricSystem ? "" : styles.active}`}>Farenheit (ºF)</span>
          </div>
          <div>
            <span className={styles.optionTitle}>Wind Speed</span>
            <span className={`${styles.option} ${metricSystem ? styles.active : ""}`}>km/h</span>
            <span className={`${styles.option} ${metricSystem ? "" : styles.active}`}>mph</span>
          </div>
          <div>
            <span>Preciptation</span>
            <span className={`${styles.option} ${metricSystem ? styles.active : ""}`}>Millimeters (mm)</span>
            <span className={`${styles.option} ${metricSystem ? "" : styles.active}`}>Inches (in)</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
