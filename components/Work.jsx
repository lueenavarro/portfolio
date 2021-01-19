import React from "react";
import styles from "./Work.module.scss";
import { FiExternalLink } from "react-icons/fi";
import { BsPersonFill } from "react-icons/bs";

const Work = ({ screenshot, title, description, link, onClick, role }) => {
  const cursorStyle = { cursor: onClick ? "pointer" : "select" };

  return (
    <div className={styles.work} onClick={onClick} style={cursorStyle}>
      <div className={styles.workScreenshot}>
        <img src={screenshot} alt={title} />
        <div className={styles.workOverlay}>
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
      </div>
      <div className={styles.workDescription}>
        <p className={styles.workTitle}>{title}</p>

        {description}
        {role && (
          <div className={styles.workRole}>
            <div className={styles.workRoleIcon}>
              <BsPersonFill />
            </div>

            {role}
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
