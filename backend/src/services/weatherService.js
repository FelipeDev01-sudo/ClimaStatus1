const axios = require('axios');
const { OPENWEATHER_API_KEY, OPENWEATHER_BASE_URL } = require('../config/env');
const { CurrentWeatherDto, ForecastDto } = require('../dtos/weatherDto');
const cacheService = require('./cacheService');

class WeatherService {
  async getCurrentWeather(city) {
    const cacheKey = `weather_${city.toLowerCase()}`;
    const cached = cacheService.get(cacheKey);
    if (cached) return cached;

    const response = await axios.get(`${OPENWEATHER_BASE_URL}/weather`, {
      params: {
        q: city,
        appid: OPENWEATHER_API_KEY,
        units: 'metric',
        lang: 'es',
      },
    });

    const dto = new CurrentWeatherDto(response.data);
    cacheService.set(cacheKey, dto);
    return dto;
  }

  async getForecast(city) {
    const cacheKey = `forecast_${city.toLowerCase()}`;
    const cached = cacheService.get(cacheKey);
    if (cached) return cached;

    const response = await axios.get(`${OPENWEATHER_BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: OPENWEATHER_API_KEY,
        units: 'metric',
        lang: 'es',
        cnt: 40,
      },
    });

    const dto = new ForecastDto(response.data);
    cacheService.set(cacheKey, dto);
    return dto;
  }
}

module.exports = new WeatherService();
