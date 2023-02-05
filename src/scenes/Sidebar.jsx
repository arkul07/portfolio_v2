import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

function Sidebar() {
  return (
    <div className="h-screen flex flex-col justify-evenly right-5 z-10 fixed">
      <div></div>
      <div>
        <div className="hover:text-india-green cursor-pointer my-10">
          <a href="https://www.linkedin.com/in/arya-kulkarni-726656236/"><AiFillLinkedin size={48} /></a>
        </div>
        <div className="hover:text-india-green cursor-pointer my-10">
        <a href="https://github.com/AryaKulkarni"><AiFillGithub size={48} /></a>
        </div>
        <div className="hover:text-india-green cursor-pointer my-10">
        <a href="mailto:kulkarni.arya1209@gmail.com"><FiMail size={48} /></a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
