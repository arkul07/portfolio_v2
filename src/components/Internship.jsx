import React from "react";

function Internship(props) {
  return (
    <div className="flex my-10 text-xl">
      <div>
        <img src={props.image} />
      </div>
      <div className="ml-10">
        <div className="text-3xl">
          {props.role}
          <div className="text-2xl">{props.company}</div>
          <div className="text-xl mb-5">({props.duration})</div>
        </div>
        <div>Technologies Used: {props.technolgies}</div>
        <ul>
          {props.work.map((work) => {
            return <li>{work}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Internship;
