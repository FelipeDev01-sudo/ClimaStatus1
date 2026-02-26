# 🌤️ ClimaStatus

A full-stack real-time weather dashboard built with **Node.js/Express** (backend) and **React + Vite** (frontend).

## Features

- 🔍 Search any city worldwide
- 🌡️ Current weather: temperature, feels like, humidity, wind, pressure, visibility
- 📅 5-day forecast grouped by day
- ⭐ Favorite cities persisted in localStorage
- ⚡ In-memory server-side cache (5-minute TTL) to reduce API calls
- 📱 Responsive, mobile-friendly UI with weather-themed gradient design

## Project Structure

```
ClimaStatus/
├── backend/   Node.js + Express REST API
└── frontend/  React + Vite SPA
```

## Quick Start

### 1. Get an API Key

Sign up at [OpenWeatherMap](https://openweathermap.org/api) for a free API key.

### 2. Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env and set OPENWEATHER_API_KEY
npm run dev
```

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite 5, Axios |
| Backend | Node.js, Express 4, Axios |
| Cache | In-memory Map with TTL |
| Styling | Pure CSS (glassmorphism + gradients) |
| Data | OpenWeatherMap API |