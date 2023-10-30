import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import useMediaQuery from "../Hooks/useMediaQuery";

function Sidebar() {
  const isDesktop = useMediaQuery("(min-width: 1150px)");
  return (
    <div className={isDesktop ? "h-screen flex flex-col justify-evenly right-5 z-10 fixed" :"hidden"}>
      <div></div>
      <div>
        <div className="hover:text-india-green cursor-pointer my-10">
          <a href="https://www.linkedin.com/in/arya-kulkarni-726656236/"><AiFillLinkedin size={48} /></a>
        </div>
        <div className="hover:text-india-green cursor-pointer my-10">
        <a href="https://github.com/arkul07"><AiFillGithub size={48} /></a>
        </div>
        <div className="hover:text-india-green cursor-pointer my-10">
        <a href="mailto:kulkarni.arya1209@gmail.com"><FiMail size={48} /></a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
