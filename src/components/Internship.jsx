import React from "react";
import useMediaQuery from '../Hooks/useMediaQuery'

function Internship(props) {
  let isDesktop = useMediaQuery("(min-width:1150px)")
  return (
    <div className={isDesktop ? "flex my-10 text-xl" :"flex flex-col my-10 text-xl"}>
      <div className="h-full mb-10 mr-10">
        <img src={props.image} className='mb-5'/>
      </div>
      <div className={isDesktop ? "ml-10" :""}>
        <div className="text-3xl">
          <span className="underline mb-4">{props.role}</span>
          <div className="text-2xl mt-5">{props.company}</div>
          <div className="text-xl mb-5">({props.duration})</div>
        </div>
        <div className="mb-5"><span className="underline">Technologies Used:</span> {props.technolgies}</div>
        <ul>
          {props.work.map((work) => {
            return <li className="mb-2">{work}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Internship;
