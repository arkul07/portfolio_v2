import React from "react";

function SkillsCard(props) {
  return (
    <div className="w-80 p-10 flex justify-center items-center flex-col bg-rich-black p-10 text-xl text-mango-green">
      <div>{props.skill.name}</div>
      <i className={props.skill.icon}></i>
      <div>{props.skill.proficiency}</div>
    </div>
  );
}

export default SkillsCard;
