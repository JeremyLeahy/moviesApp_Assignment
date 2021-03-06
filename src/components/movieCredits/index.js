import React, { useContext, useState, useEffect  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getMovieCredits } from "../../api/tmdb-api";
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
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});



export default function MovieCredits({ movie }) {
    const classes = useStyles();
    const [credits, setCredits] = useState([]);
  
    useEffect(() => {
      getMovieCredits(movie.id).then((credits) => {
        setCredits(credits.cast);
      });
    }, []);



    return (
      <div> 
          <h2>Credits (Cast)</h2>
          <Card className={classes.card}>
          {credits.map((r) => (
            
          <CardMedia
                    className={classes.media}
                    
                      

                    image={
                      r.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${r.profile_path}`
                        : img
                    }
     
                  />   
                  ))}
          </Card>
          
      </div > 
      ); 
                  }
            






            













            


