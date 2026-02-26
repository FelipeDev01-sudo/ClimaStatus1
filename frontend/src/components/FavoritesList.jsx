const FavoritesList = ({ favorites, onSelect, onRemove, currentCity }) => {
  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <span>⭐</span>
        <p>No favorite cities yet. Search for a city and star it!</p>
      </div>
    );
  }

  return (
    <div className="favorites-list">
      <h3 className="favorites-title">⭐ Favorites</h3>
      <div className="favorites-chips">
        {favorites.map((city) => (
          <div
            key={city}
            className={`favorite-chip ${currentCity === city ? 'active' : ''}`}
          >
            <button className="chip-name" onClick={() => onSelect(city)}>
              {city}
            </button>
            <button
              className="chip-remove"
              onClick={() => onRemove(city)}
              title="Remove"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
