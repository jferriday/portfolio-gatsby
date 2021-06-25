import * as React from "react";
import Layout from "../components/layout";
import "../components/normalize.css";
import * as styles from "./css/index.module.css";

// component imports
import ProjectsGallery from "../components/ProjectsGallery/projectsGallery";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main className={styles.mainContainer}>
        <section className={styles.about}>
          <div className={styles.intro}>
            <h1>Hello. I'm Josh Ferriday</h1>
            <p>
              I’m a front-end developer from Leeds, UK. I’m interested in making
              awesome experiences on the web. Always developing and learning,
              I’m available for work as part of your team.
            </p>
          </div>
          <div className={styles.portrait}></div>
        </section>

        <section>
          <ProjectsGallery/>

        </section>
      <section className={styles.contact}>
        <address>
          <h2>Contact</h2>
          <p>
          Placeholder
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Fuga non harum quasi accusantium modi unde quod sit architecto 
           nemo dolore ad omnis illum tempore, quae eos earum aut saepe numquam.
          </p>
        </address>
      </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
