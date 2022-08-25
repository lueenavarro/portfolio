import React from "react";
import styles from "./Skill.module.scss";

const Skill = ({ skill, rating }) => {
  const maxRating = 5;
  const applyRatingBarWidth = (rating) => {
    return { width: (rating / maxRating) * 100 + "%" };
  };
  const getRatingLabel = ()=> {
    let label = ""
    switch(rating){
      case 1: label = "Novice"; break;
      case 2: label = "Beginner"; break;
      case 3: label = "Skilled"; break;
      case 4: label = "Experienced"; break;
      case 5: label = "Expert"; break;
      default: label = ""
    }
    return label
  }

  return (
    <div className={styles.skill}>
      <p className={styles.skillLabel}>{skill}</p>
      <div className={styles.rating}>
        <div className={styles.ratingBar} style={applyRatingBarWidth(rating)}>
          <span className={styles.ratingLabel}>
            {getRatingLabel()}
          </span>
        </div>
        
      </div>
    </div>
  );
};

export default Skill;
