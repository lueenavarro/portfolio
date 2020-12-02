import React from "react";
import "./Home.scss";
import Typewriter from './Typewriter';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="bio">
          <Typewriter message="I'm Louie. I'm a developer." />
          <p className="bio-text">
            I'm a fullstack developer by morning and evening. Hire me and I will take
            care of your app from development to deployment.
          </p>
        </div>
        <div className="photo">
            <div className="photo-blindfold photo-blindfold--black"></div>
            <div className="photo-blindfold photo-blindfold--red"></div>
            <img className="photo-img" src="profile.png" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Home;
