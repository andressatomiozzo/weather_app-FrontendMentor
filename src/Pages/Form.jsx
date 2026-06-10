import React from "react";
import styles from "./Form.module.css"
import useForm from "../Hooks/useForm";
import SearchContext from "../createContext/SearchContext";


const Form = () => {
  const { value, onChange, onBlur } = useForm();
  const { searchCity } = React.useContext(SearchContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchCity(value)
  };

  return (
    <>
      <h1 className={styles.title}>How's the sky looking today?</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            id="search"
            name="search"
            placeholder='Search for a place...'
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={styles.input}
          />

        <button className={styles.button}>Search</button>
      </form>
    </>
  );
};

export default Form;
