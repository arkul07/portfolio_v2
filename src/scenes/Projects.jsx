import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import useMediaQuery from "../Hooks/useMediaQuery";

function Projects() {
  const isDesktop = useMediaQuery("(min-width: 1150px)");
  const projects = [
    {
      name: "OpenAI Codex",
      depiction: "./assets/codex.png",
      description:
        "A programming codex built using the OpenAI API. Ask any question related to programming and get an answer.",
      link: "https://github.com/AryaKulkarni/openai_codex",
      hosted:true,
      hostedLink:"https://openai-codex-sigma.vercel.app/"
    },
    {
      name: "Restaurant Landing Page",
      depiction: "./assets/restaurantlanding.png",
      description:
        "A fully responsive landing page for a restaurant built using React.js",
      link: "https://github.com/AryaKulkarni/restaurant_landing_page",
      hosted:true,
      hostedLink:"https://restaurant-landing-page-psi.vercel.app/"
    },
    {
      name: "Dictionary Project",
      depiction: "./assets/dictionary.png",
      description:
        "A dictionary website that displays information for any inputted word. Used the api available at https://dictionaryapi.dev/ and built the site using Express and EJS",
      link: "https://github.com/AryaKulkarni/Dictionary_Project",
      hosted:false
    },
    // {
    //   name: "Sociopedia",
    //   depiction: "",
    //   description:
    //     "An ongoing full stack MERN project with authorization building up a social media application.",
    //   link: "https://github.com/AryaKulkarni/Sociopedia",
    //   hosted:false
    // },
  ];

  const projectElements = projects.map((project) => {
    return <ProjectsCard project={project} />;
  });

  return (
    <div className={isDesktop ? "p-20 mt-10" :"p-10 mt-10"} id="projects">
      <div className="text-center text-3xl">Featured Projects</div>
      <div className="flex flex-col justify-center items-center">{projectElements}</div>
      <div className="text-center hover:text-india-green"><a href="https://github.com/AryaKulkarni" className="mt-10 text-center text-2xl underline">Visit my Github for other projects!</a></div>
    </div>
  );
}

export default Projects;
