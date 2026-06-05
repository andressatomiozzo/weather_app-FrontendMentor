import React from "react";
import Header from "./Pages/Header";
import Form from "./Pages/Form";
import SearchContext from "./createContext/SearchContext";

const Wrapper = () => {
  const { cityError } = React.useContext(SearchContext);
  return (
    <>
      <Header />
      <Form />
      {cityError ? <p>{cityError}</p> : <p>Resto</p>}
    </>
  );
};

export default Wrapper;
