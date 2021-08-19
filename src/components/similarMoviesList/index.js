import React from "react";  
import SimilarMovies from "../similarMovies";
import Grid from "@material-ui/core/Grid";


const SimilarMoviesList = ({movie}) => {
    return (
    <div> 
        <h2>Similar Movies</h2>
        <Grid container spacing = {3}>
        <SimilarMovies movie={movie} />
        </Grid>
    </div > 
    ); 
}; 

export default SimilarMoviesList;