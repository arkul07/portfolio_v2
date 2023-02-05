import React from "react";
import Atropos from "atropos/react";
import SkillBar from "./SkillBar";
import useMediaQuery from "../Hooks/useMediaQuery";

function SkillsCard(props) {
  let isDesktop= useMediaQuery("(min-width:768px)")
  return (
    isDesktop ? <Atropos
      activeOffset={isDesktop? 40 : 5}
      shadowScale={1.05}
      onEnter={() => console.log("Enter")}
      onLeave={() => console.log("Leave")}
      onRotate={(x, y) => console.log("Rotate", x, y)}
    >
      <div className={isDesktop ? "w-80 p-10 flex justify-center items-center flex-col bg-rich-black rounded-xl text-xl text-mango-green m-10" : "w-60 p-10 flex justify-center items-center flex-col bg-rich-black rounded-xl text-xl text-mango-green m-10"}>
        <div>{props.skill.name}</div>
        <img src={props.skill.icon} className="w-40 my-10" />
        <SkillBar proficiency={props.skill.proficiency}/>
      </div>
    </Atropos> : <div className={isDesktop ? "w-80 p-10 flex justify-center items-center flex-col bg-rich-black rounded-xl text-xl text-mango-green m-10" : "w-60 p-10 flex justify-center items-center flex-col bg-rich-black rounded-xl text-xl text-mango-green m-10"}>
        <div>{props.skill.name}</div>
        <img src={props.skill.icon} className="w-40 my-10" />
        <SkillBar proficiency={props.skill.proficiency}/>
      </div>
  );
}

export default SkillsCard;
