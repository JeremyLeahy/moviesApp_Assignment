import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; 
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage"; 
import TopRatedMoviesPage from "./pages/topRatedMoviesPage"; 
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import MustWatchPage from "./pages/mustWatchPage"; 
import PopularMoviesPage from "./pages/popularMoviesPage"; 
import ActorPage from "./pages/actorDetailsPage"; 



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
          <SiteHeader />  
          <MoviesContextProvider>
            
               {/* New Header  */}
          <Switch></Switch>
      <Switch>
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
        <Route exact path="/movies/mustSee" component={MustWatchPage} />
        <Route exact path="/movies/popular" component={PopularMoviesPage} />
        
        <Route exact path="/movies/topRated" component={TopRatedMoviesPage} />
        
        <Route path="/reviews/:id" component={MovieReviewPage} />
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />

        <Route exact path="/actors/:id/:movie_id" component={ActorPage} />
        
        <Route path="/movies/:id" component={MoviePage} />

        <Route exact path="/" component={HomePage} />
      
        <Redirect from="*" to="/" />
      </Switch>
      </MoviesContextProvider> 
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));



