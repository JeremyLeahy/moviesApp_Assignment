import React from "react";  
import ActorMovies from "../actorMovies";
import Grid from "@material-ui/core/Grid";
import ActorInfo from "../actorDetails";


const ActorMoviesList = ({actor}) => {
    return (
    <div> 
        <h2>Actor Filmography</h2>
        <Grid container spacing = {3}>
        <ActorMovies actor={actor} />
        </Grid>
    </div > 
    ); 
}; 

export default ActorMoviesList;