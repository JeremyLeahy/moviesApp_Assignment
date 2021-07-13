import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {getUpcomingMovies} from "../api/tmdb-api";
import Spinner from '../components/spinner'
import { useQuery } from 'react-query'
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'


const UpcomingMoviesPage = (props) => {
  const [movies, setMovies] = useState([]);
  //const favorites = movies.filter(m => m.favorite)
  //localStorage.setItem('favorites', JSON.stringify(favorites))

  //const addToFavorites = (movieId) => {
    //const updatedMovies = movies.map((m) =>
      //m.id === movieId ? { ...m, favorite: true } : m
    //);
   // setMovies(updatedMovies);
  //};

useEffect(() => {
  getUpcomingMovies().then(movies => {
    setMovies(movies);
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
/* 
const FavoriteMoviesPage = () => {
  const {favorites: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const favoriteMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const movies = favoriteMovieQueries.map((q) => q.data);
  const toDo = () => true;
*/


  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
    />
  );
};

export default UpcomingMoviesPage ;