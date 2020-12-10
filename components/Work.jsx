import React from "react";
import styles from "./Work.module.scss";

const Work = ({ screenshot, title, description, link, onClick }) => {
  const work = (
    <div className={styles.work} onClick={onClick}>
      <div className={styles.workScreenshot}>
        <img src={screenshot} alt="" />
        <div className={styles.workOverlay}>
          <p className={styles.workTitle}>{title}</p>
        </div>
      </div>
      <p className={styles.workDescription}>{description}</p>
    </div>
  );

  if (link) {
    return (
      <a className={styles.workLink} href={link} target="_blank" rel="noreferrer">
        {work}
      </a>
    );
  } else {
    return work;
  }
};

export default Work;
