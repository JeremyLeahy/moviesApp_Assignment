import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [watchList, setWatchList] = useState( [] )

  const [myReviews, setMyReviews] = useState( {} ) 

  const addToFavorites = (movie) => {
    //setFavorites([...favorites,movie.id])

//if the favorites list doesn't include the movie id
if (!favorites.includes(movie.id)){
  //then add to list
  setFavorites([...favorites,movie.id])
}

  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      //setting our fav list -for every movie in favs only leaving in the movie id that aren't equal to the movie id that we passed in 
      (mId) => mId !== movie.id
    ) )
  };

  const addToWatchList = (movie) => {
    setWatchList([...watchList,movie.id])
    console.log(watchList)
  }; 
/*
  const removeFromWatchList = (movie) => {
    setWatchList( favorites.filter(
      //setting our fav list -for every movie in favs only leaving in the movie id that aren't equal to the movie id that we passed in 
      (mId) => mId !== movie.id
    ) )
  };
*/


  

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        watchList,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatchList
      
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;