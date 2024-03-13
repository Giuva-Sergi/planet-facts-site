import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";
import chevronIcon from "../../public/assets/icon-chevron.svg";

function Navbar({ planets }) {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const classList = !menuVisibility
    ? `${styles.nav} ${styles.navHidden}`
    : `${styles.nav}`;

  return (
    <header className={`${styles.header} container`}>
      <h2 className={styles.headerLogo}>The planets</h2>
      <button
        aria-controls="primary-nav"
        aria-expanded={menuVisibility}
        className={styles.menuBtn}
        onClick={() => setMenuVisibility(!menuVisibility)}
      >
        <span className={styles.srOnly}>Menu</span>
      </button>
      <nav id="primary-nav" className={classList}>
        <ul className={styles.navLinks}>
          {planets.map((planet) => (
            <li key={planet.name}>
              <NavLink
                to={planet.name}
                className={`${styles.link} ${
                  styles[planet.name.toLowerCase()]
                }`}
                onClick={() => setMenuVisibility(false)}
              >
                {planet.name}
              </NavLink>
              <img
                src={chevronIcon}
                alt="Chevron icon"
                className={styles.chevron}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
