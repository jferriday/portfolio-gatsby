import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ReactMarkdown from "react-markdown";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./projectPage.module.css";

// Info on graphql data structure in comment at bottom

export default function ProjectPage({ data }) {
  console.log(data);
  const content = data.allStrapiProjects.edges[0].node;
  const imageData = getImage(
    content.thumbnail.localFile.childImageSharp.gatsbyImageData
  );
  return (
    <Layout pageTitle="Projects">
      <div className={styles.container}>
        <h2 className={styles.heading}>{content.title}</h2>
        <ReactMarkdown className={styles.markdownContainer} children={content.projectProfile} />
        <div className={styles.projectScreenshot}>
            <GatsbyImage
            image={imageData}
            alt={content.title}
            objectFit={"contain"}
            />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    allStrapiProjects(filter: { project: { eq: $slug } }) {
      edges {
        node {
          id
          title
          projectProfile
          shortDescription
          strapiId
          project
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
  }
`;

/*
Data from GraphQL query looks like this:
allStrapiProjects:
edges: Array(1)
0:
node:
    id: "Projects_1"
    project: "red-list-info"
    projectProfile: "This project is a full-stack app, using Express as a backend and React on the front end. It allows users to get information about threats and conservation status of species on the IUCN Red List. Users can perform global or regional searches. Species name suggestions are provided by the Global Biodiversity Information Facility (GBIF). Styling uses Material-UI, a React framework implementing material design.\n\nI initially created this to develop my back-end skills with Node and Express. Using the GBIF autocomplete API, it suggests species names to users as they type. The Red List API is used to provide conservation data for individual species.\n\nCheck it out at [redlistinfo.netlify.app.](redlistinfo.netlify.app) or see what's under the hood driving the [front end](https://github.com/jferriday/redlist-info) and [back end](https://github.com/jferriday/redlist-info-backend).\n\n**Tech Used**\n- React\n- Material-UI (JSS)\n- Node/Express\n- RESTful APIs\n- CD via Netlify\n\n\n"
    shortDescription: "A full-stack app using React & Express, styled using Material-UI. Lets users find conservation information for various species."
    strapiId: 1
    title: "Red List Info"
*/
