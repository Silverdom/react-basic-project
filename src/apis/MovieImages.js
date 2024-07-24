import { baseImageApi } from "./baseapi";

export const getMovieImage = ({ width = "w185", image_url }) => {
  return `${import.meta.env.VITE_IMG_API_URL}/${width}/${image_url}`;
};
