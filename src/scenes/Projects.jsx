import React from "react";
import ProjectsCard from "../components/ProjectsCard";

function Projects() {
  const projects = [
    {
      name: "OpenAI Codex",
      depiction: "",
      description:
        "A programming codex built using the OpenAI API. Ask any question relate to programming and get an answer.",
      link: "https://github.com/AryaKulkarni/openai_codex",
      hosted:true,
      hostedLink:"https://openai-codex-sigma.vercel.app/"
    },
    {
      name: "Restaurant Landing Page",
      depiction: "",
      description:
        "A fully responsive landing page or a restaurant built using React.js",
      link: "https://github.com/AryaKulkarni/restaurant_landing_page",
      hosted:true,
      hostedLink:"https://restaurant-landing-page-psi.vercel.app/"
    },
    {
      name: "Dictionary Project",
      depiction: "",
      description:
        "A dictionary website that displays information for any inputted word.",
      link: "https://github.com/AryaKulkarni/Dictionary_Project",
      hosted:false
    },
    {
      name: "Sociopedia",
      depiction: "",
      description:
        "An ongoing full stack MERN project with authorization building up a social media application.",
      link: "https://github.com/AryaKulkarni/Sociopedia",
      hosted:false
    },
  ];

  const projectElements = projects.map((project) => {
    return <ProjectsCard project={project} />;
  });

  return (
    <div className="p-20 mt-10" id="projects">
      <div className="flex flex-wrap">{projectElements}</div>
    </div>
  );
}

export default Projects;
