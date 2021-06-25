import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function ProjectCard({title, snippet, thumbnail}) {
    const imageData = thumbnail.localFile.childImageSharp.gatsbyImageData;
    console.log(imageData)
    

    return(
        <div className="project-card">
            <h3>{title}</h3>
            <GatsbyImage image={imageData} alt={title} />
            <p>{snippet}</p>
            
        </div>
    )
}