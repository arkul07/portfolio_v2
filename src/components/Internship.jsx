import React from 'react'

function Internship(props) {

  return (
    <div className="flex">
        <div>{props.image}</div>
        <div className="ml-10">
          <div>
            {props.role}<span>{props.duration}</span>
          </div>
          <div>{props.company}</div>
          <div>Technologies Used: {props.technolgies}</div>
          <div>
            {props.work.map((work) => {
                return (
                    <div>{work}</div>
                )
            })}
          </div>
        </div>
      </div>
  )
}

export default Internship