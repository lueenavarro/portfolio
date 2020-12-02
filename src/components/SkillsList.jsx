import React from 'react'
import Skill from './Skill'
import "./SkillsList.scss"

const SkillsList = () => {
  return (
    <div className="skills">
      <div className="skills-container">
          <Skill skill="JavaScript" rating={5}/>
          <Skill skill="Angular" rating={5}/>
          <Skill skill="React" rating={4}/>
          <Skill skill="Node.js" rating={5}/>
          <Skill skill="Express" rating={5}/>
          <Skill skill="Rest API" rating={5}/>
          <Skill skill="Python" rating={4}/>
          <Skill skill="Flask" rating={3}/>
          <Skill skill="Java" rating={3}/>
          <Skill skill="SQL" rating={4}/>
          <Skill skill="NoSQL" rating={2}/>
          <Skill skill="Docker" rating={4}/>
          <Skill skill="Kubernetes" rating={4}/>
          <Skill skill="Git" rating={5}/>
          <Skill skill="Github Actions" rating={3}/>
          <Skill skill="Jenkins" rating={3}/>
          <Skill skill="Machine Learning" rating={2}/>
          <Skill skill="React Native" rating={1}/>
          <Skill skill="Flutter" rating={1}/>
      </div>
      </div>
    
  )
}

export default SkillsList
