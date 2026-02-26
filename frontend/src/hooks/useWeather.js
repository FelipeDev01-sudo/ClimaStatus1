import { useState } from 'react';
import { weatherApi } from '../services/weatherApi';

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchCity = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const [weatherData, forecastData] = await Promise.all([
        weatherApi.getCurrentWeather(city),
        weatherApi.getForecast(city),
      ]);
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError(err.response?.data?.message || 'Error searching for the city.');
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  return { weather, forecast, loading, error, searchCity };
};
