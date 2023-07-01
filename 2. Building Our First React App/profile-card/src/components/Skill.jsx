import React from "react";

const Skill = ({ color, skill, emoji }) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
};

export default Skill;
