import React from "react";
import styles from "./Work.module.scss";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { BsPersonFill } from "react-icons/bs";

const Work = ({
  screenshot,
  title,
  description,
  link,
  repos,
  onClick,
  role,
}) => {
  const cursorStyle = { cursor: onClick ? "pointer" : "select" };

  return (
    <div className={styles.work} onClick={onClick} style={cursorStyle}>
      <div className={styles.workScreenshot}>
        <img className={styles.workScreenshotImg} src={screenshot} alt={title} />
        <div className={styles.workOverlay}>
          {link && (
            <a href={link} target="_blank" className={styles.link}>
              <span>Go to Site</span>{" "}
              <div className={styles.linkIcon}>
                <FiExternalLink />
              </div>
            </a>
          )}
        </div>
      </div>
      <div className={styles.workDescription}>
        <p className={styles.workTitle}>{title}</p>

        {description}
        {role && (
          <div className={styles.workTags}>
            <div className={styles.workTagsIcon}>
              <BsPersonFill />
            </div>

            {role}
          </div>
        )}
        {repos && (
          <div className={styles.workTags}>
            <div className={styles.workTagsIcon}>
              <AiFillGithub />
            </div>

            {repos.map((repo, index) => (
              <a
                href={repo.link}
                key={index}
                className={styles.repo}
                target="_blank"
              >
                {repo.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
