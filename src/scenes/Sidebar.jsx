import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

function Sidebar() {
  return (
    <div className="h-screen flex flex-col justify-evenly right-5 z-10 fixed">
      <div></div>
      <div>
        <div className="hover:text-blue cursor-pointer my-10">
          <a href=""><AiFillLinkedin size={48} /></a>
        </div>
        <div className="hover:text-blue cursor-pointer my-10">
        <a href=""><AiFillGithub size={48} /></a>
        </div>
        <div className="hover:text-blue cursor-pointer my-10">
        <a href=""><FiMail size={48} /></a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
