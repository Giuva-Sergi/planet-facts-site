import { useParams, useSearchParams } from "react-router-dom";
import { usePlanet } from "../hooks/usePlanet";
import styles from "./PlanetPage.module.css";
import iconSource from "../../public/assets/icon-source.svg";
import ImageComponent from "../components/ImageComponent";
import Links from "../components/Links";
import Footer from "../components/Footer";

function PlanetPage({ planets }) {
  const { planet } = useParams();
  const [searchParams] = useSearchParams();
  const currentPlanet = planets.find((p) => p.name === planet);
  const query = searchParams.get("value")
    ? searchParams.get("value")
    : "overview";
  const { name, images, radius, revolution, rotation, temperature } =
    currentPlanet;

  const { content, source } = currentPlanet[query];

  usePlanet(currentPlanet);

  return (
    <>
      <main className={`${styles.main} inner-container`}>
        <Links planet={currentPlanet} className="hidden" />
        <ImageComponent query={query} images={images} planet={planet} />
        <div className={styles.planetContainer}>
          <div>
            <h1 className={styles.planetName}>{name}</h1>
            <p className={styles.description}>{content}</p>
            <div className={styles.wikipediaContainer}>
              <span>Source : </span>
              <a className={styles.wikipediaLink} href={source} target="_blank">
                Wikipedia
              </a>
              <img src={iconSource} alt="" />
            </div>
          </div>
          <Links planet={currentPlanet} />
        </div>
      </main>
      <Footer
        rotation={rotation}
        revolution={revolution}
        radius={radius}
        temperature={temperature}
      />
    </>
  );
}

export default PlanetPage;
