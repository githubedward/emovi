import React, { useState } from "react";

import MovieContext from "./movie-context";
import { IMovie } from "./interfaces";

export default function GlobalState(props: any): JSX.Element {
  const movies: Array<IMovie> = [
    {
      id: 1,
      rating: 8.8,
      title: "Movie Title 1",
      posterUrl: "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
      releaseDate: "2019-01-02"
    },
    {
      id: 2,
      rating: 8.8,
      title: "Movie Title 2",
      posterUrl: "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
      releaseDate: "2019-01-02"
    },
    {
      id: 3,
      rating: 8.8,
      title: "Movie Title 3",
      posterUrl: "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
      releaseDate: "2019-01-02"
    },
    {
      id: 4,
      rating: 8.8,
      title: "Movie Title 4",
      posterUrl: "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
      releaseDate: "2019-01-02"
    }
  ];
  const [cart, setCart] = useState<Array<IMovie> | null>(null);

  const addMovieToCart = (movie: IMovie) => {
    if (movie) setCart([...cart, movie]);
  };

  const removeMovieFromCart = (movieId: number) => {
    if (cart) {
      const targetIndex = cart.findIndex((item: any) => item.id === movieId);
      const updatedCart = [...cart].splice(targetIndex, 1);
      setCart(updatedCart);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        cart,
        addMovieToCart,
        removeMovieFromCart
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
}
