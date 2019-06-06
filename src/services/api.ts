import axios from "axios";
import { IMovie } from "../context/interfaces";

const API_URL: string = `https://api.themoviedb.org/3/discover/movie?api_key=${
  process.env.REACT_APP_MOVIE_API_KEY
}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

export default class httpRequest {
  static async getMovies() {
    try {
    } catch (err) {
      console.error(err);
    }
  }
}
