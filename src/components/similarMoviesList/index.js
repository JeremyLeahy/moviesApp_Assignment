import React from "react";  
import SimilarMovies from "../similarMovies";


const SimilarMoviesList = ({movie}) => {
    return (
    <div> 
        <h2>Similar Movies</h2>
        <SimilarMovies movie={movie} />
    </div > 
    ); 
}; 

export default SimilarMoviesList;