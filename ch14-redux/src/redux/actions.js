import { FETCH_MOVIES, FETCH_MOVIE } from './actionTypes';

export const fetchMoviesActionCreator = (movies) => ({
  type: FETCH_MOVIES,
  payload: { movies },
});

export const fetchMovieActionCreator = (index) => ({
  type: FETCH_MOVIE,
  payload: { index },
});