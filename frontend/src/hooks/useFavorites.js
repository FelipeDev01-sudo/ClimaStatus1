import { useState, useEffect } from 'react';

const STORAGE_KEY = 'climastatus_favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (city) => {
    if (!favorites.includes(city)) {
      setFavorites((prev) => [...prev, city]);
    }
  };

  const removeFavorite = (city) => {
    setFavorites((prev) => prev.filter((f) => f !== city));
  };

  const isFavorite = (city) => favorites.includes(city);

  return { favorites, addFavorite, removeFavorite, isFavorite };
};
