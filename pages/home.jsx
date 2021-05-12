import React from "react";
import styles from "./home.module.scss";
import Typewriter from "../components/Typewriter";
import Layout from "../components/Layout";

const Home = () => {
  const bioLink = (link, icon) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt="Github" />
    </a>
  );

  return (
    <Layout>
      <div className="wrapper">
        <div className={styles.homeContainer}>
          <div className={styles.bio}>
            <Typewriter message="I'm Louie. I'm a developer." />
            <p className={styles.bioText}>
              I'm a full stack developer by morning and evening. Hire me and I
              will take care of your app from development to deployment.
            </p>
            <div className={styles.bioLinks}>
              {bioLink("https://github.com/lueenavarro", "/logos/github.svg")}
              {bioLink(
                "https://www.linkedin.com/in/lueenavarro/",
                "/logos/linkedin.svg"
              )}
            </div>
          </div>
          <div className={styles.photo}>
            <div
              className={`${styles.photoBlindfold} ${styles.photoBlindfoldBlack}`}
            ></div>
            <div
              className={`${styles.photoBlindfold} ${styles.photoBlindfoldRed}`}
            ></div>
            <img className={`${styles.photoImg}`} src="profile.png" alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
