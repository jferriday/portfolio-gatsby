import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// css modules
import * as styles from './projectCard.module.css'

export default function ProjectCard({title, snippet, thumbnail}) {
    const imageData = thumbnail.localFile.childImageSharp.gatsbyImageData;
    console.log(imageData)
    

    return(
        <div className={styles.projectCard}>
            <h3 className={styles.title}>{title}</h3>
            <GatsbyImage className={styles.image} image={imageData} alt={title} />
            <div className={styles.desc}>
            <p>{snippet}</p>
            </div>
            
        </div>
    )
}