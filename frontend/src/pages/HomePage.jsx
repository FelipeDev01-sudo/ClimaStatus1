import { useWeather } from '../hooks/useWeather';
import { useFavorites } from '../hooks/useFavorites';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import ForecastCard from '../components/ForecastCard';
import FavoritesList from '../components/FavoritesList';

const HomePage = () => {
  const { weather, forecast, loading, error, searchCity } = useWeather();
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleFavoriteToggle = (city) => {
    if (isFavorite(city)) {
      removeFavorite(city);
    } else {
      addFavorite(city);
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-logo">
          <span className="logo-icon">🌤️</span>
          <h1 className="logo-text">ClimaStatus</h1>
        </div>
        <p className="header-subtitle">Real-time weather dashboard</p>
      </header>

      {/* Search */}
      <main className="app-main">
        <section className="search-section">
          <SearchBar onSearch={searchCity} loading={loading} />
        </section>

        {/* Favorites */}
        <section className="favorites-section">
          <FavoritesList
            favorites={favorites}
            onSelect={searchCity}
            onRemove={removeFavorite}
            currentCity={weather?.city}
          />
        </section>

        {/* Error */}
        {error && (
          <div className="error-banner">
            <span>⚠️</span> {error}
          </div>
        )}

        {/* Loading skeleton */}
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner" />
            <p className="loading-text">Fetching weather data...</p>
          </div>
        )}

        {/* Weather results */}
        {!loading && weather && (
          <section className="results-section">
            <WeatherCard
              weather={weather}
              onFavorite={handleFavoriteToggle}
              isFavorite={isFavorite(weather.city)}
            />
            <ForecastCard forecast={forecast} />
          </section>
        )}

        {/* Empty state */}
        {!loading && !weather && !error && (
          <div className="empty-state">
            <span className="empty-icon">🌍</span>
            <h2>Search for a city</h2>
            <p>Enter a city name above to get current weather and a 5-day forecast.</p>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>Powered by <a href="https://openweathermap.org" target="_blank" rel="noreferrer">OpenWeatherMap</a></p>
      </footer>
    </div>
  );
};

export default HomePage;
