import React from "react";
import Internship from "../components/Internship";
import profile from "../assets/profile.jpeg";
import printerverse from "../assets/printerverse.png";
import weswap from "../assets/weswap.png";
import useMediaQuery from '../Hooks/useMediaQuery'
import bluejeans from "../assets/BlueJeans.png"

function About() {
  let isDesktop = useMediaQuery("(min-width:768px)")
  return (
    <div className={isDesktop ? "p-20 mt-10 rounded-xl" :"p-10 mt-10 rounded-xl"} id="about">
      <div className="bg-neon-green text-black text-xl mt-5 pl-2">About</div>
      <div className={isDesktop ? "flex justify-between bg-dark-jungle-green p-5" : "flex flex-col items-center bg-dark-jungle-green p-5"}>
        <div>
          {/* <img src={profile} className={isDesktop ? "rounded-3xl h-full w-3/4 mx-auto" : "rounded-3xl h-full w-full mx-auto mb-10"} /> */}
        </div>
        <div className="text-xl leading-16">
          Hello! I am a driven and eager student with a passion for technology
          and a strong desire to pursue a career as a full-stack web developer.
          I have a strong foundation in programming concepts and experience
          working with HTML, CSS, JavaScript, and various web development
          frameworks. I am constantly seeking opportunities to expand my
          skillset and gain practical experience in the field. I have completed
          several projects, both individually and as part of a team, and have
          demonstrated a commitment to delivering high-quality, user-friendly
          applications.<span className={isDesktop ? "hidden" : ""}>I am excited about the prospect of bringing my passion
          and skills to a company where I can contribute to the development of
          cutting-edge web applications and make a positive impact in the
          industry.</span>
        </div>
        {/* <div className="w-50 h-50"><img src={profile} className="w-30 h-30 rounded-full"/></div> */}
      </div>
      <div className="mt-10 bg-neon-green text-black text-xl pl-2">
        Work Experience
      </div>
      <div className="bg-dark-jungle-green p-10 rounded-xl">
        <div className="flex">
          <div className="ml-10">
          <Internship
              image={bluejeans}
              role={"Intern"}
              company={"BlueJeans By Verizon"}
              duration={"July 2023 - Present"}
              technolgies={"Java, Spring, MySQL, Zookeeper, Docker"}
              work={[
                "Revamping the core Recording Service microservice from Java 8 to Java 17, leveraging the Spring Framework to enhance the scalability, modularity, and maintainability of the microservice, resulting in improved code quality and development efficiency.",
              ]}
            />
            <Internship
              image={printerverse}
              role={"Full Stack Development Intern"}
              company={"Printerverse"}
              duration={"December 2022 - February 2022"}
              technolgies={"Svelte.js, Fuse.js"}
              work={[
                "Designed, built and tested responsive layouts for the progressive web application in Svelte.",
                "Helped implement categorized searching using Fuse.js to improve user experience",
              ]}
            />
            <Internship
              image={weswap}
              role={"Backend Development Intern"}
              duration={"May 2022 - July 2022"}
              company={"WeSwap Mobility Solutions"}
              technolgies={"Node.js, Express.js, MongoDB, REST APIs"}
              work={[
                "Helped design ER models based on the app's requirements and translated those into schemas using Mongoose.",
                "Built APIs to handle server requests and helped the frontend team integrate into the app.",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
