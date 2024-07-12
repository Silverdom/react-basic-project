import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";
import SingleMovie from "./pages/SingleMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies",
        children: [
          {
            index: true,
            element: <MovieList />,
          },
          {
            path: ":movieId",
            element: <SingleMovie />,
          },
        ],
      },
    ],
  },
]);

export default router;
