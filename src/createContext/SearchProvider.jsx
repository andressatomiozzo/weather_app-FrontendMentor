import React from "react";
import SearchContext from "./SearchContext";

const SearchProvider = ({ children }) => {
  const [city, setCity] = React.useState("")
  const [cityData, setCityData] = React.useState(null);
  const [cityError, setCityError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const searchApi = async () => {
    try {
      setLoading(true);
      setCityError(null);
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
      const json = await response.json();
      if (!response.ok) throw new Error("No search results found!");
      if (!json.results) throw new Error("No search results found!");
      setCityData(json);
    } catch (err) {
      setCityError(err.message);
      setCityData(null);
    } finally {
      setLoading(false);
    }
  };

  return <SearchContext value={{searchApi, cityError, loading, setCity, city}}>{children}</SearchContext>;
};

export default SearchProvider;
