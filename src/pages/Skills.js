import React from "react";
import './Skill.css';
import skillData from '../components/skill.json';
import { useState, useRef } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";


const SkillpageBanner = () => {
  return (
    <div className="skillpage-banner">
      <h1>技能介紹  Skills</h1>
    </div>
  )

}


const Skills = () => {


  let skillslideRef = useRef(null);
  const [skill, setSkill] = useState(0);

  const changeSkillcontent = (id) => {
    setSkill(id);
  }

  const prev = () => {
    skillslideRef && skillslideRef.current && skillslideRef.current.scrollTo({
      behavior: "smooth",
      top: 0,
      left:
        skillslideRef.current.scrollLeft - skillslideRef.current.clientWidth,
    });
  };

  const next = () => {
    skillslideRef && skillslideRef.current && skillslideRef.current.scrollTo({
      behavior: "smooth",
      top: 0,
      left:
        skillslideRef.current.scrollLeft + skillslideRef.current.clientWidth,
    });
  };


  return (
    <>
      <SkillpageBanner/>
      <div className="css-skill-slider" ref={skillslideRef}>
        <h3 className="skill-left-arrow"><BiLeftArrow onClick={prev} /></h3>
        <h3 className="skill-right-arrow"><BiRightArrow onClick={next} /></h3>
        {skillData.skills.map((item) => {
          return (
            <>
              <div className="itemblock">
                <img src={item.skillImg} key={item.skillImg} alt="" />
                <button className="skillImg-button" onClick={() => changeSkillcontent(item.id)}>click</button>
              </div>

            </>
          );
        })};
      </div>
      <div className="css-skill-detail">
        {skillData.skills.map((item) => {
          if (item.id === skill) {
            return (
              <>
                <div className="css-skill-animation">
                  <img src={item.skillAnimation} alt="" />
                </div>
                <div className="css-skill-desc">
                  <span>{item.skillDescription}</span>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
};

export default Skills;