import React, { useContext, useState, useEffect  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";
import { getSimilarMovies } from "../../api/tmdb-api";


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
        setMovies(movies.results);
      });
    }, []);

  return (
    <>
    {similarMovies.map((movie) => (
    
    <Card className={classes.card}>
      <CardHeader
      className={classes.header}
      
      title={
        <Typography variant="h5" component="p">
          {movie.title}{" "}
        </Typography>
      }
    />


      <CardMedia
        className={classes.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    


    
    </Card>
     ))} 
  </>
  );
    } 



/*
    return (
      <>  
        {credits.map((r) => (
        <Card className={classes.card}>

<CardHeader
      className={classes.header}
      
      title={
        <Typography variant="h5" component="p">
          {movie.title}{" "}
        </Typography>
      }
    />
                   
        <CardMedia
                  className={classes.media}
                            
                            
                  image={
                    r.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${r.profile_path}`
                      : img
                  }
                />
               <Typography variant="h6" component="p">
               <StarIcon fontSize="small" />  
              {r.name}
              <StarIcon fontSize="small" />

              </Typography>

              <Typography variant="h6" component="p">
              {"Character" + ":" + " "}{r.character}
              </Typography>
        </Card>
        ))}   
        </>            
    ); */
                




