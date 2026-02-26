require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3001,
  OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY || '',
  OPENWEATHER_BASE_URL: 'https://api.openweathermap.org/data/2.5',
  CACHE_TTL: parseInt(process.env.CACHE_TTL) || 300000, // 5 minutes
};
