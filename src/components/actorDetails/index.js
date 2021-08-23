import React, { useState, useEffect} from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MovieReviews from "../movieReviews";
import Button from "@material-ui/core/Button";
import CreditsList from "../creditList"
import SimilarMoviesList from "../similarMoviesList"
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { getActorInfo } from "../../api/tmdb-api";
import { getActorFilmography } from "../../api/tmdb-api";
import ActorFilms from "../actorMovies"
import ActorMoviesList from "../actorMoviesList"
import img from '../../images/film-poster-placeholder.png'
import { Info } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
    card: { maxWidth: 345 },
    media: { height: 500 },
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));



export default function ActorInfo({ actor, movie }) {
    const classes = useStyles();
    const [info, setInfo] = useState([]);
    const [actorMovies, setActorMovies] = useState([]);
  
    useEffect(() => {
      getActorInfo(actor.id).then((info) => {
        setInfo(info);
      });
    }, []);

/*
    useEffect(() => {
        getActorFilmography(actor.id).then((actorMovies) => {
          setActorMovies(actorMovies);
        });
      }, []);

  */  

  return (
    <>
      
      <br />
           
      <Grid container style={{ padding: "25px" }}>
      <Grid item xs={6} >



      <img width="90%"
      src={`https://image.tmdb.org/t/p/w500/${info.profile_path}`}
      
      />
      </Grid>

      <Grid item xs={6}>

  <Typography variant="h6" component="p" >
        {info.biography}
      </Typography>
      </Grid>

      </Grid>

        

        <Paper elevation={3}>
      <ActorMoviesList  actor = {actor}> 

        </ActorMoviesList>  
        </Paper> 


      

    
      </>

  );
};
