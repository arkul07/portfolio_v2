import React from "react";
import SkillsCard from "../components/SkillsCard";
import useMediaQuery from "../Hooks/useMediaQuery";

function Skills() {

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const frontendskills = [
    {
      name:"React.js",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      proficiency:3
    },
    {
      name:"Svelte.js",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
      proficiency:2
    },
    {
      name:"Vue.js",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      proficiency:1
    },
    {
      name:"HTML5",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      proficiency:3
    },
    {
      name:"CSS3",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      proficiency:3
    },
    {
      name:"Javascript (ES6+)",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      proficiency:3
    },
    {
      name:"Typescript",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      proficiency:1
    },
    {
      name:"Redux.js",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      proficiency:1
    },
    // {
    //   name:"EJS",
    //   icon:"",
    //   proficiency:3
    // },
    {
      name:"TailwindCSS",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
      proficiency:2
    },
  ]

  const backendskills = [
    {
      name:"Node.js",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      proficiency:2
    },
    {
      name:"MongoDB",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
      proficiency:2
    },
    {
      name:"MySQL",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
      proficiency:2
    },
  ]

  const otherskills = [
    {
      name:"Java",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      proficiency:3
    },
    {
      name:"C Programming",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      proficiency:3
    },
    {
      name:"Python",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      proficiency:2
    },
    {
      name:"Pytorch",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      proficiency:1
    },
    {
      name:"Git/Github",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      proficiency:2
    },
  ]

  const frontendElements = frontendskills.map((skill) => {
    return (
      <SkillsCard skill={skill}/>
    )
  })
  const backendElements = backendskills.map((skill) => {
    return (
      <SkillsCard skill={skill}/>
    )
  })
  const otherElements = otherskills.map((skill) => {
    return (
      <SkillsCard skill={skill}/>
    )
  })






  return (
    <div className={isDesktop ? "p-20" : "p-10"} id="skills">
    <div className="text-3xl text-neon-green text-center mt-5">My Skills</div>
      <div>
        <div className="text-xl mt-10 text-black bg-neon-green pl-2">Frontend Web Development</div>
        <div className="flex justify-center flex-wrap p-5 bg-dark-jungle-green">{frontendElements}</div>
      </div>
      <div>
        <div className="text-xl mt-10 text-black bg-neon-green pl-2">Backend Web Development</div>
        <div className="flex justify-center flex-wrap p-5 bg-dark-jungle-green">{backendElements}</div>
      </div>
      <div>
        <div className="text-xl mt-10 text-black bg-neon-green pl-2">Others</div>
        <div className="flex justify-center flex-wrap p-5 bg-dark-jungle-green">{otherElements}</div>
      </div>
    </div>
  );
}

export default Skills;
