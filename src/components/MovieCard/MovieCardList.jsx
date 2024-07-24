import React, { useEffect, useState } from "react";
import { getMovieImage } from "../../apis/MovieImages";

const MovieCardList = ({ data }) => {
  return (
    <div>
      {data.map((movieDetails) => (
        <MovieCard {...movieDetails} key={movieDetails.id} />
      ))}
    </div>
  );
};

const MovieCard = ({ id, title, poster_path }) => {
  const [movieImage, setMovieImage] = useState(null);
  return (
    <div>
      <p>{title}</p>
      <img
        src={getMovieImage({ width: "w185", image_url: poster_path })}
        alt=""
      />
    </div>
  );
};

const MovieCardSkeleton = () => {
  return "Loading...";
};

const MovieCardListSkeleton = ({ count = 10 }) => {
  const data = Array.from(Array(count).keys());
  return (
    <div>
      {data.map((data) => (
        <MovieCardSkeleton key={data} />
      ))}
    </div>
  );
};

export { MovieCardList, MovieCardListSkeleton };
