import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import Work from "../components/Work";

import styles from "./works.module.scss";

const WorksList = () => {
  const [imgsLoaded, setImgsLoaded] = useState(false);
  const images = [
    "/screenshots/esjs-hardware.jpg",
    "/screenshots/precious-finds.jpg",
    "/screenshots/covid-ph-stats.jpg",
  ];

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image;
        loadImg.onload = () => resolve(true);
        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(images.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  });

  return (
    <Layout title="Works">
      <div className={`${styles.works} wrapper`}>
        <div className={styles.worksContainer}>
          {imgsLoaded ? (
            <>
              <h3 className={styles.worksSectionTitle}>Freelance</h3>
              <div className={styles.worksList}>
                <Work
                  screenshot={images[0]}
                  title="Edgar SJ Santos Hardware"
                  description="Sales and item tracker"
                />
                <Work
                  screenshot={images[1]}
                  title="Precious Finds"
                  description="E-commerce site proof of concept"
                  link="https://preciousfinds.netlify.app"
                />
              </div>
              <br />
              <h3 className={styles.worksSectionTitle}>Playgrounds</h3>
              <div className={styles.worksList}>
                <Work
                  screenshot={images[2]}
                  title="Covid PH Tracker"
                  description="Tracks covid cases per region. Data is webscraped daily from Wikipedia using AWS Lambda, S3 and API Gateway."
                  link="https://covid-ph-stats.netlify.app"
                />
              </div>
            </>
          ) : (
              <Loader />

          )}
        </div>
      </div>
    </Layout>
  );
};

export default WorksList;
