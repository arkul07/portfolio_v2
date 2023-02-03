import React from "react";
import Internship from "../components/Internship";

function About() {
  return (
    <div className="p-10">
      <div>About</div>
      <div>
        I am currently a junior studying Computer Science at Birla Institute of
        Technology and Science, Pilani. I am passionate about Full Stack Web
        Development and have recently begun exploring Machine Learning and
        Artificial Intelligence
      </div>
      <div className="mt-10">Work Experience</div>
      <div className="flex">
        <div className="ml-10">
          <Internship
            role={"Full Stack Development Intern"}
            company={"Printerverse"}
            technolgies={"Svelte.js, Fuse.js"}
            work={[
              "Designed, built and tested responsive layouts for the progressive web application in Svelte.",
              "Helped implement categorized searching using Fuse.js to improve user experience",
            ]}
          />
          <Internship
            role={"Backend Development Intern"}
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
  );
}

export default About;
