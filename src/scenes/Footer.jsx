import React from 'react'
import {SiReact} from "react-icons/si"
import { AiFillHeart } from 'react-icons/ai'

function Footer() {
  return (
    <div className='bottom-0 p-5 text-center' id="footer">
      <div>Made with <span className='text-center inline'><AiFillHeart className='inline' size={24}/></span> by Arya Kulkarni</div>
    </div>
  )
}

export default Footer