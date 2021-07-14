import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [watchList, setWatchList] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 

  const addToFavorites = (movie) => {
    setFavorites([...favorites,movie.id])
//if id already in list don't add 


  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addToWatchList = (movie) => {
    setWatchList([...watchList,movie.id])
    console.log(watchList)
  }; 

  

  return (
    <MoviesContext.Provider
      value={{
        favorites,
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