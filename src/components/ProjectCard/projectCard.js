import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// css modules
import * as styles from "./projectCard.module.css";

export default function ProjectCard({ title, snippet, thumbnail, slug }) {
  const imageData = getImage(
    thumbnail.localFile.childImageSharp.gatsbyImageData
  );
  console.log(imageData);

  return (
    <div className={styles.projectCard}>
      <div className={styles.figure}>
        <h3 className={styles.title}><a href={`/projects/${slug}`} className={styles.projectLink}>{title}</a></h3>
        <GatsbyImage
          className={styles.image}
          image={imageData}
          alt={title}
          objectFit={"contain"}
        />
      </div>
      <div className={styles.desc}>
        <p>{snippet}</p>
        <a href={`/projects/${slug}`} className={styles.projectLink}>Check it out.</a>
        
      </div>
    </div>
  );
}
