import React from "react";
import useForm from "../Hooks/useForm";
import SearchContext from "../createContext/SearchContext";

const Form = () => {
  const { value, error, onChange, onBlur } = useForm();
  const { searchApi, setCity, city } = React.useContext(SearchContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(value);
    searchApi()
  };

  return (
    <div>
      <h1>How's the sky looking today?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search for a place..."
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {error && <span>{error}</span>}
        <button>Search</button>
      </form>
      {city && <p>{city}</p>}
    </div>
  );
};

export default Form;
