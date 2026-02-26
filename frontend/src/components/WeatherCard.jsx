const WeatherCard = ({ weather, onFavorite, isFavorite }) => {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <div className="weather-card-header">
        <div>
          <h2 className="city-name">
            {weather.city}, <span className="country">{weather.country}</span>
          </h2>
          <p className="weather-description">{weather.description}</p>
        </div>
        <button
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => onFavorite(weather.city)}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '★' : '☆'}
        </button>
      </div>

      <div className="weather-main">
        <img
          src={weather.iconUrl}
          alt={weather.description}
          className="weather-icon"
        />
        <div className="temperature-block">
          <span className="temperature">{weather.temperature}°C</span>
          <span className="feels-like">Feels like {weather.feelsLike}°C</span>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-icon">💧</span>
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{weather.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">💨</span>
          <span className="detail-label">Wind</span>
          <span className="detail-value">{weather.windSpeed} m/s</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">🌡️</span>
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{weather.pressure} hPa</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">👁️</span>
          <span className="detail-label">Visibility</span>
          <span className="detail-value">{(weather.visibility / 1000).toFixed(1)} km</span>
        </div>
      </div>

      <p className="timestamp">Updated: {new Date(weather.timestamp).toLocaleTimeString()}</p>
    </div>
  );
};

export default WeatherCard;
