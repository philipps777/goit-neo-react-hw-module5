import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header>
      <nav className={style.nav}>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <NavLink to="/" className={style.navLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={style.navLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
