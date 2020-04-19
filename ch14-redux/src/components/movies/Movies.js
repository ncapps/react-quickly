import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Route, Link, Switch, useRouteMatch, useParams } from "react-router-dom";
import { fetchMoviesActionCreator as fetchMovies } from "../../redux/actions";
import Movie from '../movie/Movie';
import "./Movies.css";

import movieList from "../../movies.json";

export default function Movies() {
  const { path, url } = useRouteMatch();
  const { movieId } = useParams();
  const movies = useSelector(({ movies }) => movies.all, shallowEqual);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchMovies(movieList));
  });

  return (
    <div className="movies">
      <div className={ movieId ? "listHidden" : "list"}>
        {movies.map((movie, index) => (
          <Link key={index} to={`${url}/${index + 1}`}>
            <div
              className="movie"
              style={{ backgroundImage: `url(${movie.cover})` }}
            />
          </Link>
        ))}
      </div>

      <Switch>
        <Route path={`${path}/:movieId`}>
          <Movie />
        </Route>
      </Switch>
    </div>
  );
}
