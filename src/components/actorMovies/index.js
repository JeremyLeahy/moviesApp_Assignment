import React, { useContext, useState, useEffect  } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import { getActorFilmography } from "../../api/tmdb-api";

import MovieCard from "../movieCard";
import AddToFavoritesIcon from "../cardIcons/addToFavorites";



const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function ActorMovies({ actor, movie }) {
    const classes = useStyles();
    const [actorMovies, setActorMovies] = useState([]);
    
    

    useEffect(() => {
        getActorFilmography(actor.id).then((actorMovies) => {
          setActorMovies(actorMovies.cast);
        });
      }, []);

  return (
    <>
    {actorMovies.map((movie) => (
    <Grid item xs={12} sm={6} md={4} lg={20} xl={2} spacing = {3}>
    <MovieCard movie = {movie} key = {movie.id} action={(movie) => {
      return <AddToFavoritesIcon movie={movie} />   
    }}>

      
    </MovieCard>
    </Grid>
     ))} 


  </>
  );
    } 