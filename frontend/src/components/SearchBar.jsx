import { useState } from 'react';

const SearchBar = ({ onSearch, loading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = input.trim();
    if (city) {
      onSearch(city);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search for a city..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
      </div>
      <button type="submit" className="search-btn" disabled={loading || !input.trim()}>
        {loading ? <span className="spinner" /> : 'Search'}
      </button>
    </form>
  );
};

export default SearchBar;
