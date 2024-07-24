import axios from "axios";

export const baseApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: "Bearer " + import.meta.env.VITE_API_KEY,
    Accept: "application/json",
  },
});
export const baseImageApi = axios.create({
  baseURL: import.meta.env.VITE_IMG_API_URL,
});
