import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

function Sidebar() {
  return (
    <div className="h-screen flex flex-col justify-evenly right-5 z-10 fixed">
      <div></div>
      <div>
        <div className="hover:text-blue my-10">
          <AiFillLinkedin size={48} />
        </div>
        <div className="hover:text-blue my-10">
          <AiFillGithub size={48} />
        </div>
        <div className="hover:text-blue my-10">
          <FiMail size={48} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
