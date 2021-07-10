import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// css modules
import * as styles from "./projectCard.module.css";

export default function ProjectCard({ title, snippet, thumbnail }) {
  const imageData = getImage(
    thumbnail.localFile.childImageSharp.gatsbyImageData
  );
  console.log(imageData);

  return (
    <div className={styles.projectCard}>
      <div className={styles.figure}>
        <h3 className={styles.title}>{title}</h3>
        <GatsbyImage
          className={styles.image}
          image={imageData}
          alt={title}
          objectFit={"contain"}
        />
      </div>
      <div className={styles.desc}>
        <p>{snippet}</p>
      </div>
    </div>
  );
}
