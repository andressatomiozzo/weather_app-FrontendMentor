import React from "react";
import styles from "./Form.module.css";
import SearchContext from "../createContext/SearchContext";

const Form = () => {
  const { searchCity, loading} = React.useContext(SearchContext);
  const [suggestions, setSuggestions] = React.useState(true);

  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  const validate = (value) => {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = ({ target }) => {
    error && validate(target.value);
    setValue(target.value);
  };

  const handleLiClick = ({ target }) => {
    setValue(target.textContent);
    setSuggestions(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchCity(value.trim());
    setValue("");
  };

  return (
    <>
      <h1 className={styles.title}>How's the sky looking today?</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search for a place..."
          value={value}
          onChange={onChange}
          onKeyDown={() => setSuggestions(false)}
          onFocus={() => setSuggestions(true)}
          className={styles.input}
          autoComplete="off"
        />

        {suggestions && (
          <ul className={styles.suggestions}>
            <li onClick={handleLiClick}>Berlin</li>
            <li onClick={handleLiClick}>São Paulo</li>
            <li onClick={handleLiClick}>Bloemfontein</li>
          </ul>
        )}

        {loading && <span className={styles.loading}>Search in progress</span>}

        <button className={styles.button}>Search</button>
      </form>
    </>
  );
};

export default Form;
