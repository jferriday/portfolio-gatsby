import React from "react";
import * as styles from "./projectsGallery.module.css";
import { useStaticQuery, graphql } from "gatsby";
import ProjectCard from "../ProjectCard/projectCard";

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
  `);
  const projects = data.allStrapiProjects.nodes;
  console.log(projects)

  return (
    <section className={styles.sectionContainer}>
      <h2>Projects</h2>
      <p className={styles.projectsText}>
        The projects below illustrate some of the skills I've developed whilst
        learning about front end development.
        <br />
        Select a project for more information.
      </p>
      <div className={styles.projectsGalleryContainer}>
        {projects.map((project) => {
          console.log(project);

          return (
            <ProjectCard
              key={project.strapiId}
              slug={project.project}
              title={project.title}
              snippet={project.shortDescription}
              thumbnail={project.thumbnail}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsGallery;
