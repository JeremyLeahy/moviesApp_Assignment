import React, { useState, useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { getActorInfo } from "../../api/tmdb-api";
import ActorMoviesList from "../actorMoviesList"
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
