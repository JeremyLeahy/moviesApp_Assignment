import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getMovies } from "../api/tmdb-api";

const HomePage = (props) => {
  const [movies, setMovies] = useState([]);
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  const addToFavorites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    setMovies(updatedMovies);
  };
/*
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        return json.results;
      })
      .then((movies) => {
        setMovies(movies);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
*/
useEffect(() => {
  getMovies().then(movies => {
    setMovies(movies);
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <PageTemplate
      title='Discover Movies'
      movies={movies}
      selectFavorite={addToFavorites}
    />
  );
};
export default HomePage;