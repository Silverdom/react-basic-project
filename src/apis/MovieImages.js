import { baseImageApi } from "./baseapi";

export const getUpcomingMovies = (width, image_url) => {
  return baseImageApi.get(`/${width}/${image_url}`).then((res) => res.data);
};
