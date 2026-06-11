import React from "react";
import Header from "./Pages/Header";
import Form from "./Pages/Form";
import SearchContext from "./createContext/SearchContext";
import Results from "./Pages/Results/Results"

const Wrapper = () => {
  const { cityError, cityData, weatherData } = React.useContext(SearchContext);
  return (
    <>
      <Header />
      <Form />
      {cityData && weatherData && <Results/>}
      {cityError && <p>{cityError}</p>}
      
    </>
  );
};

export default Wrapper;
