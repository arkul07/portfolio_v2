import React from "react";

function SkillsCard(props) {
  return (
    <div className="w-80 p-10 flex justify-center items-center flex-col bg-rich-black rounded-xl text-xl text-mango-green m-10">
      <div>{props.skill.name}</div>
      <img src={props.skill.icon} className="w-40 my-10"/>
      <div>{props.skill.proficiency}</div>
    </div>
  );
}

export default SkillsCard;
