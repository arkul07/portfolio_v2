import React from "react";
import Internship from "../components/Internship";
import profile from "../assets/profile.jpeg";
import printerverse from "../assets/printerverse.png";
import weswap from "../assets/weswap.png";

function About() {
  return (
    <div className="p-20 mt-10" id="about">
      <div className="bg-india-green text-black text-xl mt-5">About</div>
      <div className="flex justify-between bg-dark-jungle-green p-5">
        <div className="text-xl">
          I am currently a 20 year old pre-final year student studying Computer Science at Birla
          Institute of Technology and Science, Pilani. I am passionate about
          Full Stack Web Development and have recently begun exploring Machine
          Learning and Artificial Intelligence.
        </div>
        {/* <div className="w-50 h-50"><img src={profile} className="w-30 h-30 rounded-full"/></div> */}
      </div>
      <div className="mt-10 bg-india-green text-black text-xl">Work Experience</div>
      <div className="bg-dark-jungle-green p-10 rounded-xl">
        <div className="flex">
          <div className="ml-10">
            <Internship
              image={printerverse}
              role={"Full Stack Development Intern"}
              company={"Printerverse"}
              duration={"December 2022 - Present"}
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
