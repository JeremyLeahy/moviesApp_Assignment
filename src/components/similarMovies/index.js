import React, { useContext, useState, useEffect  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png'
import { getSimilarMovies } from "../../api/tmdb-api";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MovieCard from "../movieCard";
import AddToFavoritesIcon from "../cardIcons/addToFavorites";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function SimilarMovies({ movie, action }) {
    const classes = useStyles();
    const [similarMovies, setMovies] = useState([]);
    
    

    useEffect(() => {
      getSimilarMovies(movie.id).then((movies) => {
        setMovies(movies.results.slice(0,6));
      });
    }, []);

  return (
    <>
    {similarMovies.map((movie) => (
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




                




