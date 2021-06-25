import React from 'react'
import * as styles from './projectsGallery.module.css'

// Project gallery component for home page

const ProjectsGallery = () => {
return(
    <section className={styles.sectionContainer}>

    <div className={styles.projectsGalleryContainer}>
        <div className={styles.projectCard} />
        <div className={styles.projectCard} />
        <div className={styles.projectCard} />
        <div className={styles.projectCard} />
    

    </div>
    </section>
)

}

export default ProjectsGallery