import React from "react";
import SkillsCard from "../components/SkillsCard";

function Skills() {

  const frontendskills = [
    {
      name:"React.js",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      proficiency:4
    },
    {
      name:"Svelte.js",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
      proficiency:3
    },
    {
      name:"Vue.js",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      proficiency:2
    },
    {
      name:"HTML5",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      proficiency:5
    },
    {
      name:"CSS3",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      proficiency:5
    },
    {
      name:"Javascript (ES6+)",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      proficiency:4
    },
    {
      name:"Typescript",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      proficiency:2
    },
    {
      name:"Redux.js",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      proficiency:2
    },
    // {
    //   name:"EJS",
    //   icon:"",
    //   proficiency:3
    // },
    {
      name:"TailwindCSS",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
      proficiency:3
    },
  ]

  const backendskills = [
    {
      name:"Node.js",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      proficiency:3
    },
    {
      name:"MongoDB",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
      proficiency:3
    },
    {
      name:"MySQL",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
      proficiency:3
    },
  ]

  const otherskills = [
    {
      name:"Java",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      proficiency:4
    },
    {
      name:"C Programming",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      proficiency:3
    },
    {
      name:"Python",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      proficiency:3
    },
    {
      name:"Pytorch",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      proficiency:2
    },
    {
      name:"Git/Github",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      proficiency:4
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
    <div className="p-10">
      <div>
        <div className="text-xl mt-10 text-dark-jungle-green bg-india-green">Frontend Web Development</div>
        <div className="flex justify-center flex-wrap p-10 bg-dark-jungle-green">{frontendElements}</div>
      </div>
      <div>
        <div className="text-xl mt-10 text-india-green">Backend Web Development</div>
        <div className="flex justify-center flex-wrap p-10 bg-dark-jungle-green">{backendElements}</div>
      </div>
      <div>
        <div className="text-xl mt-10 text-india-green">Others</div>
        <div className="flex justify-center flex-wrap p-10 bg-dark-jungle-green">{otherElements}</div>
      </div>
    </div>
  );
}

export default Skills;
