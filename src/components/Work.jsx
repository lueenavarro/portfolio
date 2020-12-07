import React from "react";
import "./Work.scss";

const Work = ({ screenshot, title, description, link }) => {
    const work = <div className="work">
      <img className="work-screenshot" src={screenshot} alt="" />
      <div className="work-overlay">
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
    </div>
    
    if(link) {
        return <a className="work-link" href={link} target="_blank" rel="noreferrer">{work}</a>
    } else {
        return work
    }
};

export default Work;
