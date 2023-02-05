import React from "react";
import Atropos from "atropos/react";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import useMediaQuery from "../Hooks/useMediaQuery";

function ProjectsCard(props) {
  let isDesktop = useMediaQuery("(min-width:768px)");
  return (
    <div
      className={
        isDesktop
          ? "w-4/5 text-2xl p-20 my-10 flex flex-col justify-between items-center bg-dark-jungle-green rounded-xl relative"
          : "w-full text-2xl p-20 my-10 flex flex-col justify-center items-center bg-dark-jungle-green rounded-xl relative"
      }
    >
      <div
        className={
          isDesktop
            ? "w-4/5 text-2xl flex flex-col justify-center items-center bg-dark-jungle-green rounded-xl"
            : "w-full text-2xl flex flex-col justify-center items-center bg-dark-jungle-green rounded-xl"
        }
      >
        <Atropos
          className="my-atropos flex flex-col justify-center items-center"
          activeOffset={40}
          shadowScale={1.05}
          onEnter={() => console.log("Enter")}
          onLeave={() => console.log("Leave")}
          onRotate={(x, y) => console.log("Rotate", x, y)}
        >
          <div>
            <img
              src={props.project.depiction}
              className={isDesktop ? "rounded-xl mb-10" : "hidden"}
            />
          </div>
        </Atropos>
        <div className="text-center underline mb-5">{props.project.name}</div>
        {/* <div>{props.project.depiction}</div> */}
        <div className={isDesktop ? "text-xl text-center" : "text-xl"}>
          {props.project.description}
        </div>
      </div>
      {props.project.hosted ? (
        <div className="text-right flex absolute bottom-4 right-8">
          <a href={props.project.link} className="hover:text-india-green mr-10">
            <AiFillGithub size={36} />
          </a>
          <br />
          <a
            href={props.project.hostedLink}
            className="hover:text-india-green"
          >
            <FiExternalLink size={36} />
          </a>
        </div>
      ) : (
        <div className="text-right flex absolute bottom-4 right-8">
          <a href={props.project.link} className="hover:text-india-green">
            <AiFillGithub size={36} />
          </a>
        </div>
      )}
    </div>
  );
}

export default ProjectsCard;
