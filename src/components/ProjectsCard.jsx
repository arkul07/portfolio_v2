import React from 'react'

function ProjectsCard(props) {
  return (
    <div className='w-4/5 text-2xl p-10 my-10 flex flex-col justify-center items-center bg-dark-jungle-green'>
        <div><img src={props.project.depiction}/></div>
        <div>{props.project.name}</div>
        {/* <div>{props.project.depiction}</div> */}
        <div className='text-xl'>{props.project.description}</div>
        {props.project.hosted ? (
            <div>
            <a href={props.project.hostedLink}>Visit</a><br/>
            <a href={props.project.link}>Go to Repo</a>
            </div>
        ) : (
            <a href={props.project.link}>Go to Repo</a>
        )}
    </div>
  )
}

export default ProjectsCard