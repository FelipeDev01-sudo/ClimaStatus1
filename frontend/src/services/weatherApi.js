import axios from 'axios';

const API_BASE = '/api';

export const weatherApi = {
  getCurrentWeather: async (city) => {
    const response = await axios.get(`${API_BASE}/weather/city/${encodeURIComponent(city)}`);
    return response.data;
  },

  getForecast: async (city) => {
    const response = await axios.get(`${API_BASE}/weather/forecast/${encodeURIComponent(city)}`);
    return response.data;
  },

  getCacheStats: async () => {
    const response = await axios.get(`${API_BASE}/cache/stats`);
    return response.data;
  },
};
