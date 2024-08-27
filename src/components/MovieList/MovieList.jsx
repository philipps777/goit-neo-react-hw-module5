import style from "./MovieList.module.css";

import { Link, useLocation } from "react-router-dom";
const baseUrl = "https://image.tmdb.org/t/p/w500/";
const PLACEHOLDER = "https://via.placeholder.com/182x273";
const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul className={style.movieList}>
        {movies.map(({ id, title, poster_path, original_title }) => {
          return (
            <li key={id} className={style.movieItem}>
              <h2 className={style.movie__title}>
                <Link state={{ from: location }} to={`/movies/${id}`}>
                  <img
                    src={`${
                      poster_path
                        ? baseUrl + poster_path
                        : PLACEHOLDER + "?text=" + original_title
                    }`}
                    // src={baseUrl + poster_path}
                    alt={original_title}
                    style={{ width: "100%" }}
                    className={style.movieImg}
                  />
                  <h3 className={style.title}>{title}</h3>
                </Link>
              </h2>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieList;
