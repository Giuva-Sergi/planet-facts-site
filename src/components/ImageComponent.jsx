import styles from "./ImageComponent.module.css";
function ImageComponent({ query, images, planet }) {
  let image;
  let additionalImage;

  if (query === "overview") {
    image = images.planet;
  } else if (query === "structure") {
    image = images.internal;
  } else if (query === "geology") {
    image = images.planet;
    additionalImage = images.geology;
  }

  return (
    <div className={styles.imgContainer}>
      <img src={image} alt={`${planet} image`} />
      {additionalImage && (
        <img
          src={additionalImage}
          alt={`${planet} surface geology image`}
          className={styles.geologyImg}
        />
      )}
    </div>
  );
}

export default ImageComponent;
