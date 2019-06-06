import React from "react";
import { IMovie } from "./interfaces";

export default React.createContext({
  movies: [] as IMovie[] | null,
  cart: [] as IMovie[] | null,
  addMovieToCart: (movie: any): any => {},
  removeMovieFromCart: (movieId: number): any => {}
});
