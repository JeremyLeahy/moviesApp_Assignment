import React, { useContext, useState, useEffect  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getMovieCredits } from "../../api/tmdb-api";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import StarsIcon from '@material-ui/icons/Stars';


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
        <>  
          {credits.map((r) => (
             <Grid item xs={12} sm={6} md={4} lg={20} xl={2} spacing = {3}>
          <Card className={classes.card}>
                     
          <CardMedia
                    className={classes.media}
                              
                              
                    image={
                      r.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${r.profile_path}`
                        : img
                    }
                  />
      <CardContent>
        
            <Typography variant="h6" component="p">
              
              <StarsIcon fontSize="small" />
              {" "}{r.name}
            </Typography>
          
          
            <Typography variant="h6" component="p">

              {"Character: " + " "}{r.character}
            </Typography>
          
      </CardContent>

      <CardActions disableSpacing>
      <Link to={`/actors/${r.id}/${movie.id}`}>
      
          <Button variant="outlined" size="medium" color="primary">
            See more...
          </Button>
          </Link>
      </CardActions>
      
          
           
          </Card>
          </Grid>
          ))}   
          </>            
      ); 
                  }             





      
            
            
            
    
  

