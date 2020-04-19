import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchMovieActionCreator as fetchMovie} from "../../redux/actions";
import "./Movie.css";

export default function Movie() {
  const { movieId } = useParams();
  const movie = useSelector(({ movies }) => movies.current, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovie(movieId));
  });

  return (
    <div
      className="moviePoster"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${movie.cover})`,
      }}
    >
      <div
        className="cover"
        style={{ backgroundImage: `url(${movie.cover})` }}
      />
      <div className="description">
        <div className="title">{movie.title}</div>
        <div className="year">{movie.year}</div>
        <div className="starring">
          {movie.starring.map((actor = {}, index) => (
            <div key={index} className="actor">
              {actor.name}
            </div>
          ))}
        </div>
      </div>
      <Link className="closeButton" to="/movies">
        ←
      </Link>
    </div>
  );
}
