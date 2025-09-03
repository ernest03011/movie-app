import { useContext } from "react";
import MovieContext from "./MovieContext";

const useMovieContext = () => useContext(MovieContext);

export default useMovieContext;
