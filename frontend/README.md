# ClimaStatus Frontend

React + Vite weather dashboard that connects to the ClimaStatus backend.

## Setup

```bash
cd frontend
npm install
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

> The Vite dev server proxies `/api` requests to `http://localhost:3001`, so you need the backend running too.

## Features

- 🔍 Search any city by name
- 🌡️ Current weather with temperature, humidity, wind, pressure, visibility
- 📅 5-day forecast grouped by day
- ⭐ Save favorite cities (persisted in localStorage)
- 📱 Responsive design — works on mobile and desktop

## Build for Production

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```
