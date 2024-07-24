import React, { useEffect, useState } from "react";
import { getUpcomingMovies } from "../apis/MovieListing";
import {
  MovieCardList,
  MovieCardListSkeleton,
} from "../components/MovieCard/MovieCardList";

const Home = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [upcomingMovieList, setUpcomingMovieList] = useState([]);

  useEffect(() => {
    getUpcomingMovies().then((data) => {
      setIsLoading(false);
      setUpcomingMovieList(data.results);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <MovieCardListSkeleton />
      ) : (
        <MovieCardList data={upcomingMovieList} />
      )}
      Home
    </div>
  );
};

export default Home;
