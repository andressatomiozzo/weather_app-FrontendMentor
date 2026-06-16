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
      {cityError && <p style={{ margin:"auto", fontWeight: "500", fontSize: "1.2rem"}}>{cityError}</p>}
      
    </>
  );
};

export default Wrapper;
