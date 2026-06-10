import React from "react";
import { fetchWeatherApi } from "openmeteo";

const useSearch = () => {
  const [weatherData, setWeatherData] = React.useState(null);
  const [weatherError, setWeatherError] = React.useState(false);
  const [weatherLoading, setWeatherLoading] = React.useState(false);

  const request = React.useCallback(
    async (latitude, longitude) => {
      // Passar parâmetros e url para fazer o fetch
      const params = {
        latitude: latitude,
        longitude: longitude,
        daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
        hourly: ["temperature_2m", "weather_code"],
        current: [
          "temperature_2m",
          "precipitation",
          "weather_code",
          "wind_speed_10m",
          "apparent_temperature",
          "relative_humidity_2m",
        ],
        timezone: "auto",
      };
      const url = "https://api.open-meteo.com/v1/forecast";

      try {
        setWeatherLoading(true);
        setWeatherError(null);
        const responses = await fetchWeatherApi(url, params);
        // const json = await responses.json();
        // if (!responses.ok) throw new Error("Erro ao buscar o tempo");

        // Pega o primeiro resultado
        const response = responses[0];

        // Attributes for timezone and location
        const utcOffsetSeconds = response.utcOffsetSeconds();

        const current = response.current();
        const hourly = response.hourly();
        const daily = response.daily();

        // Note: The order of weather variables in the URL query and the indices below need to match
        // Objeto que será exportado do fetch
        const weatherData = {
          current: {
            // Agora
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000), //Data
            temperature_2m: current.variables(0).value(), // Temperatura
            precipitation: current.variables(1).value(), // Precipitação
            weather_code: current.variables(2).value(), // Código do tempo
            wind_speed_10m: current.variables(3).value(), // Velocidade do vento
            apparent_temperature: current.variables(4).value(), // Feels like
            relative_humidity_2m: current.variables(5).value(), // Umidade
          },
          hourly: {
            // A cada hora
            time: Array.from(
              { length: (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval() },
              (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000),
            ),
            temperature_2m: hourly.variables(0).valuesArray(),
            weather_code: hourly.variables(1).valuesArray(),
          },
          daily: {
            // A cada dia
            time: Array.from(
              { length: (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval() },
              (_, i) => new Date((Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) * 1000),
            ),
            weather_code: daily.variables(0).valuesArray(),
            temperature_2m_max: daily.variables(1).valuesArray(),
            temperature_2m_min: daily.variables(2).valuesArray(),
          },
        };

        setWeatherData(weatherData);
        return weatherData;
      } catch (err) {
        setWeatherData(null);
        setWeatherError(err.message);
      } finally {
        setWeatherLoading(false);
      }
    },
    [setWeatherLoading, setWeatherData, setWeatherError],
  );

  return {
    weatherData,
    weatherError,
    weatherLoading,
    request,
  };
};

export default useSearch;
