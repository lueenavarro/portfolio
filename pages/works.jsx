import React from "react";
import Layout from "../components/Layout";
import Work from "../components/Work";
import styles from "./works.module.scss";

const WorksList = () => {
  return (
    <Layout title="Works">
      <div className={`${styles.works} wrapper`}>
        <div className={styles.worksContainer}>
          <h3 className={styles.worksSectionTitle}>Freelance</h3>
          <div className={styles.worksList}>
            <Work
              screenshot="screenshots/esjs-hardware.jpg"
              title="Edgar SJ Santos Hardware"
              description="Sales and item tracker"
            />
            <Work
              screenshot="screenshots/precious-finds.jpg"
              title="Precious Finds"
              description="E-commerce site proof of concept"
              link="https://preciousfinds.netlify.app"
            />
          </div>
          <br />
          <h3 className={styles.worksSectionTitle}>Playgrounds</h3>
          <div className={styles.worksList}>
            <Work
              screenshot="screenshots/covid-ph-stats.jpg"
              title="Covid PH Tracker"
              description="Tracks covid cases per region. Data is webscraped daily from Wikipedia using AWS Lambda, S3 and API Gateway."
              link="https://covid-ph-stats.netlify.app"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WorksList;
