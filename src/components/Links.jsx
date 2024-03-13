import styles from "./Links.module.css";
import { Link } from "react-router-dom";
function Links({ planet, className = "" }) {
  return (
    <div className={`${styles.linksContainer} ${className}`}>
      <Link
        className={`${styles.detailsLink} ${
          styles[planet.name.toLowerCase()]
        } ${styles.secondaryLink}`}
        to="?value=overview"
      >
        <span>01</span>Overview
      </Link>
      <Link
        className={`${styles.detailsLink} ${
          styles[planet.name.toLowerCase()]
        } ${styles.secondaryLink}`}
        to="?value=structure"
      >
        <span>02</span>
        {className === "hidden" ? "Structure" : "Internal structure"}
      </Link>
      <Link
        className={`${styles.detailsLink} ${
          styles[planet.name.toLowerCase()]
        } ${styles.secondaryLink}`}
        to="?value=geology"
      >
        <span>03</span>
        {className === "hidden" ? "Surface" : "Surface geology"}
      </Link>
    </div>
  );
}

export default Links;
