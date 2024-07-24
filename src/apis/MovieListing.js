import { baseApi } from "./baseapi";

export const getUpcomingMovies = (page = 1) => {
  return baseApi.get(`/movie/upcoming?page=${page}`).then((res) => res.data);
};
