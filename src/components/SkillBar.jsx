import React from 'react'

function SkillBar(props) {

    let proficiency=props.proficiency
  return (
    <div>
    <div className='flex items-center'>
        <div className='rounded-full bg-primary-500 w-3 h-3'></div>
        <div className='rounded-full bg-primary-500 w-5 h-1'></div>
        <div className={proficiency == 1 ? 'rounded-full bg-primary-500 w-5 h-5' : 'rounded-full bg-primary-500 w-3 h-3'}></div>
        <div className={proficiency > 1 ?  'rounded-full bg-primary-500 w-5 h-1' : 'rounded-full bg-gray-500 w-5 h-1'}></div>
        <div className={proficiency > 1 ? proficiency ==2 ?  'rounded-full bg-primary-500 w-5 h-5' : 'rounded-full bg-primary-500 w-3 h-3' : 'rounded-full bg-gray-500 w-3 h-3'}></div>
        <div className={proficiency > 2 ?  'rounded-full bg-primary-500 w-5 h-1' : 'rounded-full bg-gray-500 w-5 h-1'}></div>
        <div className={proficiency > 2 ?  'rounded-full bg-primary-500 w-5 h-5' : 'rounded-full bg-gray-500 w-3 h-3'}></div>
    </div>
    <div className='mt-3'>
        {proficiency == 1 && (
            <div className='text-sm relative left-5 text-white bg-primary-500 w-fit p-1 rounded-sm'>Basic</div>
        )}
        {proficiency == 2 && (
            <div className='text-sm relative left-9 text-white bg-primary-500 w-fit p-1 rounded-sm'>Intermediate</div>
        )}
        {proficiency == 3 && (
            <div className='text-sm relative left-16 text-white bg-primary-500 w-fit p-1 rounded-sm'>Advanced</div>
        )}
    </div>
    </div>
  )
}

export default SkillBar