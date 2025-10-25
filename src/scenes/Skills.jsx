import React from "react";
import { motion } from "framer-motion";
import SkillsInteractive from "../components/SkillsInteractive";

function Skills() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

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
      name:"TypeScript",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      proficiency:3
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
      proficiency:3
    },
    {
      name:"Next.js",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      proficiency:2
    },
  ]

  const backendskills = [
    {
      name:"Python",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      proficiency:3
    },
    {
      name:"Java",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      proficiency:3
    },
    {
      name:"FastAPI",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      proficiency:3
    },
    {
      name:"Spring Boot",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg",
      proficiency:3
    },
    {
      name:"Node.js",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      proficiency:3
    },
    {
      name:"Flask",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      proficiency:2
    },
    {
      name:"REST APIs",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      proficiency:3
    },
    {
      name:"Microservices",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
      proficiency:3
    },
  ]

  const otherskills = [
    {
      name:"PyTorch",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      proficiency:3
    },
    {
      name:"TensorFlow",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      proficiency:2
    },
    {
      name:"Scikit-learn",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      proficiency:3
    },
    {
      name:"AWS",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      proficiency:3
    },
    {
      name:"Docker",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
      proficiency:3
    },
    {
      name:"Kubernetes",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
      proficiency:2
    },
    {
      name:"Jenkins",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      proficiency:2
    },
    {
      name:"Terraform",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
      proficiency:2
    },
    {
      name:"PostgreSQL",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      proficiency:3
    },
    {
      name:"MongoDB",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
      proficiency:3
    },
    {
      name:"Redis",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      proficiency:2
    },
    {
      name:"C++",
      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      proficiency:2
    },
  ]

  // Combine all skills for 3D visualization
  const allSkills = [...frontendskills, ...backendskills, ...otherskills];






  return (
    <motion.section 
      className="py-20 px-4 md:px-20" 
      id="skills"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Interactive 3D visualization of my technical skills and proficiency levels
          </p>
        </motion.div>

        <motion.div 
          className="mb-16"
          variants={itemVariants}
        >
          <SkillsInteractive skillsData={allSkills} />
        </motion.div>

        {/* Skill categories breakdown */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mt-16"
          variants={itemVariants}
        >
          <div className="text-center">
            <div className="text-2xl font-semibold mb-4 text-white flex items-center justify-center">
              <div className="w-2 h-8 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full mr-4"></div>
              Frontend
            </div>
            <div className="text-gray-300">
              {frontendskills.length} technologies
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-semibold mb-4 text-white flex items-center justify-center">
              <div className="w-2 h-8 bg-gradient-to-b from-accent-500 to-primary-500 rounded-full mr-4"></div>
              Backend
            </div>
            <div className="text-gray-300">
              {backendskills.length} technologies
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-semibold mb-4 text-white flex items-center justify-center">
              <div className="w-2 h-8 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full mr-4"></div>
              AI/ML & DevOps
            </div>
            <div className="text-gray-300">
              {otherskills.length} technologies
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Skills;
