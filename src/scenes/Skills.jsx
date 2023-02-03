import React from "react";
import SkillsCard from "../components/SkillsCard";

function Skills() {

  const frontendskills = [
    {
      name:"React.js",
      icon:"devicon-react-original colored",
      proficiency:4
    },
    {
      name:"Svelte.js",
      icon:"devicon-svelte-plain colored",
      proficiency:3
    },
    {
      name:"Vue.js",
      icon:"devicon-vuejs-plain colored",
      proficiency:2
    },
    {
      name:"HTML5",
      icon:"devicon-html5-plain colored",
      proficiency:5
    },
    {
      name:"CSS3",
      icon:"devicon-css3-plain colored",
      proficiency:5
    },
    {
      name:"Javascript (ES6+)",
      icon:"devicon-javascript-plain colored",
      proficiency:4
    },
    {
      name:"Typescript",
      icon:"devicon-typescript-plain colored",
      proficiency:2
    },
    {
      name:"Redux.js",
      icon:"devicon-redux-original colored",
      proficiency:2
    },
    {
      name:"EJS",
      icon:"",
      proficiency:3
    },
    {
      name:"TailwindCSS",
      icon:"devicon-tailwindcss-plain colored",
      proficiency:3
    },
  ]

  const backendskills = [
    {
      name:"Node.js",
      icon:"devicon-nodejs-plain-wordmark colored",
      proficiency:3
    },
    {
      name:"MongoDB",
      icon:"devicon-mongodb-plain colored",
      proficiency:3
    },
    {
      name:"MySQL",
      icon:"devicon-mysql-plain-wordmark colored",
      proficiency:3
    },
  ]

  const otherskills = [
    {
      name:"Java",
      icon:"devicon-java-plain colored",
      proficiency:4
    },
    {
      name:"C Programming",
      icon:"devicon-c-plain colored",
      proficiency:3
    },
    {
      name:"Python",
      icon:"devicon-python-plain-wordmark",
      proficiency:3
    },
    {
      name:"Pytorch",
      icon:"devicon-pytorch-plain-wordmark colore",
      proficiency:2
    },
    {
      name:"Git/Github",
      icon:"devicon-github-original colored",
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
        <div className="flex flex-wrap p-10 bg-dark-jungle-green">{frontendElements}</div>
      </div>
      <div>
        <div className="text-xl mt-10 text-india-green">Backend Web Development</div>
        <div className="flex flex-wrap p-10 bg-dark-jungle-green">{backendElements}</div>
      </div>
      <div>
        <div className="text-xl mt-10 text-india-green">Others</div>
        <div className="flex flex-wrap p-10 bg-dark-jungle-green">{otherElements}</div>
      </div>
    </div>
  );
}

export default Skills;
