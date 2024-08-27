import { Link, NavLink, Outlet } from "react-router-dom";
import style from "./MovieInfo.module.css";
const MovieInfo = ({
  backLink,
  backdrop_path,
  title,
  vote_average,
  overview,
  genres,
  poster_path,
}) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";

  return (
    <div
      className={style.infoContainer}
      // style={{
      //   backgroundImage: `url(${baseUrl + backdrop_path})`,
      //   backgroundSize: "cover",
      //   filter: "blur(5px)",
      //   opacity: 0.7,
      // }}
    >
      <div className={style.newStile}>
        <Link className={style.infoLink} to={backLink.current}>
          Go back
        </Link>
        <div className={style.movieInfoDiv}>
          {backdrop_path && (
            <img 
              src={baseUrl + backdrop_path}
              alt={title}
              className={style.movieImg}
            />
          )}
          {/* <img src={baseUrl + backdrop_path} alt={title} /> */}
          <h2 className={style.movieInfoTitle}>{title}</h2>
          <p className={style.movieInfoText}>User score : {vote_average}</p>
          <h3 className={style.movieInfoTitle}>Overview</h3>
          <p className={style.movieInfoText}>{overview}</p>
          <h3 className={style.movieInfoTitle}>Genres</h3>
          <p className={style.movieInfoText}>
            {genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
        <div className={style.linkWrap}>
          <ul className={style.linkList}>
            <li className={style.linkItem}>
              <NavLink to="cast" className={style.infoLink}>
                Cast
              </NavLink>
            </li>
            <li className={style.linkItem}>
              <NavLink to="reviews" className={style.infoLink}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default MovieInfo;
