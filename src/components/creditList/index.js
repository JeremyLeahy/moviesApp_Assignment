import React from "react";  
import MovieCredits from "../creditsCard";
import Grid from "@material-ui/core/Grid";

const CreditsList = ({movie}) => {
    return (
    <div> 
        <h2>Credits (Cast)</h2>
        <Grid container spacing = {3}>

        <MovieCredits movie={movie} />
        </Grid>
    </div > 
    ); 
}; 

export default CreditsList;