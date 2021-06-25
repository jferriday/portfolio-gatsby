import React from 'react'
import * as styles from './projectsGallery.module.css'
import {useStaticQuery, graphql} from 'gatsby';
import ProjectCard from '../ProjectCard/projectCard';

// Project gallery component for home page

const ProjectsGallery = () => {
    // grab data for project
    const data = useStaticQuery(graphql`
    query projects {
        allStrapiProjects {
            nodes {
            strapiId
            title
            project
            projectProfile
            shortDescription
            thumbnail {
                localFile {
                    childImageSharp {
                        gatsbyImageData
          }
        }
            }
            }
        }
        }
    `)
const projects = data.allStrapiProjects.nodes


return(
    <section className={styles.sectionContainer}>

    <div className={styles.projectsGalleryContainer}>
        {projects.map(project => {
            console.log(project);

            return <ProjectCard key={project.strapiId}
            title={project.title}
            snippet={project.shortDescription}
            thumbnail={project.thumbnail}
            />
        })
    }
        
       

    </div>
    </section>
)

}

export default ProjectsGallery