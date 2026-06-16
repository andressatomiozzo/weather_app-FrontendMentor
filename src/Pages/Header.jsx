import React from "react";
import Logo from "../assets/svg/logo.svg?react";
import styles from "./Header.module.css";
import SystemContext from "../createContext/SystemContext";
import useClickOut from "../Hooks/useClickOut"

const Header = () => {
  const [btnActive, setBtnActive] = React.useState(false);
  const { metricSystem, setMetricSystem } = React.useContext(SystemContext);
  const menuRef = React.useRef();

  const handleClick = () => {
    const newValue = !metricSystem;

    setMetricSystem(newValue);
    localStorage.setItem("metricSystem", JSON.stringify(newValue));
  };

  useClickOut(menuRef, setBtnActive)

  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <div ref={menuRef}>
        <button className={styles.button} onClick={() => setBtnActive(!btnActive)}>
          Units
        </button>
        {btnActive && (
          <div className={styles.optionsWrapper}>
            <button onClick={handleClick}>{metricSystem ? "Switch to Imperial" : "Switch to Metric"}</button>
            <ul>
              <li className={styles.options}>
                <span className={styles.optionTitle}>Temperature</span>
                <span className={`${styles.option} ${metricSystem ? styles.active : ""}`}>Celsius (ºC)</span>
                <span className={`${styles.option} ${metricSystem ? "" : styles.active}`}>Farenheit (ºF)</span>
              </li>
              <li className={styles.options}>
                <span className={styles.optionTitle}>Wind Speed</span>
                <span className={`${styles.option} ${metricSystem ? styles.active : ""}`}>km/h</span>
                <span className={`${styles.option} ${metricSystem ? "" : styles.active}`}>mph</span>
              </li>
              <li className={styles.options}>
                <span className={styles.optionTitle}>Preciptation</span>
                <span className={`${styles.option} ${metricSystem ? styles.active : ""}`}>Millimeters (mm)</span>
                <span className={`${styles.option} ${metricSystem ? "" : styles.active}`}>Inches (in)</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
