import React from "react";

const Skill = ({ color, skill, emoji }) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {emoji === "beginner" && "👶"}
        {emoji === "intermediate" && "👍"}
        {emoji === "advanced" && "💪"}
      </span>
    </div>
  );
};

export default Skill;
