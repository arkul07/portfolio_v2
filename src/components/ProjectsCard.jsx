import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import useMediaQuery from "../Hooks/useMediaQuery";

function ProjectsCard(props) {
  let isDesktop = useMediaQuery("(min-width:768px)");
  
  return (
    <div className="w-full bg-dark-800 rounded-xl overflow-hidden transition-all duration-300 hover:bg-dark-700 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/20">
      <div className="relative">
        <img
          src={props.project.depiction}
          alt={props.project.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <a 
            href={props.project.link} 
            className="p-2 bg-dark-900/80 rounded-full hover:bg-primary-500 transition-colors duration-300"
            aria-label="GitHub"
          >
            <AiFillGithub size={20} className="text-white" />
          </a>
          {props.project.hosted && (
            <a
              href={props.project.hostedLink}
              className="p-2 bg-dark-900/80 rounded-full hover:bg-accent-500 transition-colors duration-300"
              aria-label="Live Demo"
            >
              <FiExternalLink size={20} className="text-white" />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{props.project.name}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          {props.project.description}
        </p>
      </div>
    </div>
  );
}

export default ProjectsCard;
