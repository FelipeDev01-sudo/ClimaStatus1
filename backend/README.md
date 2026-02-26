# ClimaStatus Backend

Node.js/Express REST API that proxies OpenWeatherMap data with in-memory caching.

## Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env and add your OpenWeatherMap API key
npm run dev
```

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `PORT` | `3001` | Server port |
| `OPENWEATHER_API_KEY` | `` | Your OpenWeatherMap API key |
| `CACHE_TTL` | `300000` | Cache time-to-live in ms (5 min) |

## Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/health` | Health check |
| `GET` | `/api/weather/city/:city` | Current weather for a city |
| `GET` | `/api/weather/forecast/:city` | 5-day forecast for a city |
| `GET` | `/api/cache/stats` | In-memory cache statistics |

## Getting an API Key

Sign up at [OpenWeatherMap](https://openweathermap.org/api) and copy your free API key.
