import React from "react";
import Work from "./Work";
import "./Works.scss";

const Works = () => {
  return (
    <div className="works wrapper">
      <div className="works-container">
        <Work
          screenshot="screenshots/precious-finds.jpg"
          title="Precious Finds"
          description="E-commerce site POC"
          link="https://preciousfinds.netlify.app"
        />
        <Work
          screenshot="screenshots/esjs-hardware.jpg"
          title="Edgar SJ Santos Hardware"
          description="Sales and Item tracker"
        />
      </div>
    </div>
  );
};

export default Works;
