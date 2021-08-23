import React from "react";
import { withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
//import useMovie from "../hooks/useMovie";
import { getActorFilmography, getMovie } from '../api/tmdb-api'
import { getActorInfo2 } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import ActorInfo from "../components/actorDetails";
import ActorMovies from "../components/actorMovies";
import ActorHeader from "../components/headerActor";

const ActorPage = (props) => {
  const { id } = props.match.params;
  const { movie_id } = props.match.params;

  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActorInfo2,
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    <>
    
    <ActorHeader actor = {actor} >

    </ActorHeader>

      {actor ? (
        <>
          
            <ActorInfo actor={actor} />
               
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}

    <ActorMovies actor = {actor} >

    </ActorMovies>

    </>
  );
};

export default withRouter(ActorPage);