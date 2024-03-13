import styles from "./Footer.module.css";

function Footer({ rotation, revolution, radius, temperature }) {
  return (
    <footer className={`inner-container ${styles.footer}`}>
      <div className={styles.planetInfo}>
        <h4>rotation time</h4>
        <h2>{rotation}</h2>
      </div>
      <div className={styles.planetInfo}>
        <h4>revolution time</h4>
        <h2>{revolution}</h2>
      </div>
      <div className={styles.planetInfo}>
        <h4>radius</h4>
        <h2>{radius}</h2>
      </div>
      <div className={styles.planetInfo}>
        <h4>average temp.</h4>
        <h2>{temperature}</h2>
      </div>
    </footer>
  );
}

export default Footer;
