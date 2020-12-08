import React from "react";
import styles from "./home.module.scss";
import Typewriter from '../components/Typewriter';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
    <div className="wrapper">
      <div className={styles.homeContainer}>
        <div className={styles.bio}>
          <Typewriter message="I'm Louie. I'm a developer." />
          <p className={styles.bioText}>
            I'm a fullstack developer by morning and evening. Hire me and I will take
            care of your app from development to deployment.
          </p>
        </div>
        <div className={styles.photo}>
            <div className={`${styles.photoBlindfold} ${styles.photoBlindfoldBlack}`}></div>
            <div className={`${styles.photoBlindfold} ${styles.photoBlindfoldRed}`}></div>
            <img className={`${styles.photoImg}`} src="profile.png" alt=""/>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Home;
