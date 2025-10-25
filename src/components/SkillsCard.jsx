import React from "react";
import SkillBar from "./SkillBar";
import useMediaQuery from "../Hooks/useMediaQuery";

function SkillsCard(props) {
  let isDesktop = useMediaQuery("(min-width:768px)")
  
  return (
    <div className={`${isDesktop ? "w-48" : "w-40"} p-4 flex justify-center items-center flex-col bg-dark-800 rounded-xl text-sm text-white m-2 transition-all duration-300 hover:bg-dark-700 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/20`}>
      <div className="text-center font-semibold mb-2 text-xs">{props.skill.name}</div>
      <img src={props.skill.icon} className="w-12 h-12 my-2" alt={props.skill.name} />
      <SkillBar proficiency={props.skill.proficiency}/>
    </div>
  );
}

export default SkillsCard;
