import React from "react";
import SearchContext from "./SearchContext";
import OpenMeteo from "./useSearch";
import SystemContext from "./SystemContext";

const SearchProvider = ({ children }) => {
  const [cityData, setCityData] = React.useState(null);
  const [cityError, setCityError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const { weatherData, weatherError, weatherLoading, request } = OpenMeteo();
  const { metricSystem } = React.useContext(SystemContext);

  const searchCity = async (cityName) => {
    try {
      setLoading(true);
      setCityError(null);
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`);
      const json = await response.json();
      if (!response.ok) throw new Error("No search results found!");
      if (!json.results) throw new Error("No search results found!");
      setCityData(json);
    } catch (err) {
      setCityError(err.message);
      setCityData(null);
    }
  };

  React.useEffect(() => {
    const searchWeather = async () => {
      const { latitude, longitude } = cityData.results[0];

      await request(latitude, longitude);
      console.log('terminou')
      setLoading(false);
    };

    cityData && searchWeather();
  }, [metricSystem, cityData, request]);

  return (
    <SearchContext value={{ searchCity, cityError, loading, cityData, weatherData, weatherError, weatherLoading }}>
      {children}
    </SearchContext>
  );
};

export default SearchProvider;
