import React from "react";
import Work from "./Work";
import "./Works.scss";

const Works = () => {
  return (
    <div className="wrapper works">
      <div className="works-container">
      <h3>Freelance</h3>
      <div className="works-list">
        <Work
          screenshot="screenshots/precious-finds.jpg"
          title="Precious Finds"
          description="E-commerce site proof of concept"
          link="https://preciousfinds.netlify.app"
        />
        <Work
          screenshot="screenshots/esjs-hardware.jpg"
          title="Edgar SJ Santos Hardware"
          description="Sales and item tracker"
        />
      </div>
      <br/>
      <h3>Playgrounds</h3>
      <div className="works-list">
        <Work
          screenshot="screenshots/covid-ph-stats.jpg"
          title="Covid PH Tracker"
          description="Tracks covid cases per region. Data is webscraped daily from Wikipedia using AWS Lambda, S3 and API Gateway."
          link="https://covid-ph-stats.netlify.app"
        />
        </div>
        </div>
    </div>
  );
};

export default Works;
