import React from "react";
import styles from "./Work.module.scss";
import { FiExternalLink } from "react-icons/fi";
import { BsPersonFill } from "react-icons/bs";

const Work = ({
  screenshot,
  title,
  description,
  link,
  onClick,
  role,
}) => {
  const cursorStyle = { cursor: onClick ? "pointer" : "select" };

  return (
    <div className={styles.work} onClick={onClick} style={cursorStyle}>
      <div className={styles.workScreenshot}>
        <img src={screenshot} alt={title} />
        <div className={styles.workOverlay}>
          <p className={styles.workTitle}>{title}</p>
        </div>
      </div>
      <p className={styles.workDescription}>
        {description}
        {role && (
          <div className={styles.workRole}>
            <div className={styles.workRoleIcon}><BsPersonFill /></div>
            
            {role}
          </div>
        )}
      </p>
      {link && (
        <div className={styles.linkOverlay}>
          <a href={link} target="_blank" className={styles.linkButton}>
            <span>Go to Site</span>{" "}
            <div className={styles.linkIcon}>
              <FiExternalLink />
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default Work;
