import React, { useEffect } from "react";

const MovieCardList = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((movieDetails) => (
        <MovieCard {...movieDetails} key={movieDetails.id} />
      ))}
    </div>
  );
};

const MovieCard = ({ id, title, poster_path }) => {
  useEffect(() => {}, []);
  return <p>{title}</p>;
};

const MovieCardSkeleton = () => {};

const MovieCardListSkeleton = () => {
  return <div>Movie Card Skeleton</div>;
};

export { MovieCardList, MovieCardListSkeleton };
