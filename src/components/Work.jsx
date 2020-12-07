import React from "react";
import "./Work.scss";

const Work = ({ screenshot, title, description, link }) => {
  const work = (
    <div className="work">
      <div className="work-screenshot">
        <img src={screenshot} alt="" />
        <div className="work-overlay">
          <h3>{title}</h3>
        </div>
      </div>
      <p className="work-description">{description}</p>
    </div>
  );

  if (link) {
    return (
      <a className="work-link" href={link} target="_blank" rel="noreferrer">
        {work}
      </a>
    );
  } else {
    return work;
  }
};

export default Work;
