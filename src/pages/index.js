import * as React from "react";
import Layout from "../components/layout";
import "../components/normalize.css";
import * as styles from "./css/index.module.css";
import { StaticImage } from "gatsby-plugin-image";

// component imports
import ProjectsGallery from "../components/ProjectsGallery/projectsGallery";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Josh Ferriday">
      <main className={styles.container}> 
        <div className={styles.intro}>
          <p className={styles.introText}>
            Hello, I'm Josh Ferriday.
            <br></br><br/>
            I’m a front-end developer from Leeds, UK. I’m interested in making
            great experiences on the web.
            <br></br><br/>
            Always developing and learning, I’m available for work as part of
            your team.
          </p>
        </div>
        <div className={styles.portrait}>
          <StaticImage
            src="../images/profile-photo.jpg"
            alt="profile photo"
            objectFit={"contain"}
            className={styles.portraitImage}
          />
        </div>

        <section id="projects" className={styles.projectsSection}>
          <ProjectsGallery />
        </section>
        <section id="contact" className={styles.contact}>
          <address>
            <h2 className={styles.subheading}>Contact</h2>
            <p>Want to get in touch?</p>
            <div className={styles.contactButtons}>
              <div className={styles.CTA}>
                <a href="mailto:joshferriday@gmail.com">Drop me an email</a>
              </div>
              <div className={styles.CTA}>
                <a href="https://github.com/ferriday">Find me on GitHub</a>
              </div>
            </div>
          </address>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
