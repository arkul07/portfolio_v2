import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { AiFillLinkedin, AiFillGithub,AiFillFacebook } from "react-icons/ai";


function handeClick() {
  alert("Thank you for your response!! Will get back to you as soon as I can.")
  setTimeout(() => {
    window.location.reload()
  },1500)
}

function Contact() {
  return (
    <div id="contact" className="p-20 w-3/4 mx-auto">
      <div className="w-full mx-auto text-3xl">CONTACT</div>
      <div>
        <div className="flex justify-between">
          <form className="flex flex-col w-1/2">
            <input type="text" placeholder="Name" className="my-5 p-2 rounded-lg bg-dark-jungle-green  text-neon-green"/>
            <input type="email" placeholder="Email" className="my-5 p-2 rounded-lg  bg-dark-jungle-green  text-neon-green"/>
            <textarea rows={10} cols={35} placeholder="Message" className="rounded-lg p-2 my-5 bg-dark-jungle-green  text-neon-green"/>
            <button type='button' onClick={handeClick} className="bg-dark-jungle-green w-40 text-xl mx-auto mt-5 p-2 rounded-xl hover:text-india-green">Send</button>
          </form>
          <div>
            <div className="flex flex-col my-auto relative top-5">
              <div className="mb-10">
                <BsFillTelephoneFill size={30} className="inline mr-5" />
                <span>+1 562-503-5564 / +91 9028083741</span>
              </div>
              <div className="mb-20">
                <FiMail size={36} className="inline mr-5"></FiMail>
                <span>kulkarni.arya129@gmail.com</span>
              </div>
              <div>
                <hr className="bg-neon-green"/>
                <div className="flex justify-evenly my-5">
                  <a href="https://github.com/AryaKulkarni" className="hover:cursor-pointer hover:text-india-green"><AiFillGithub size={40} className="inline"></AiFillGithub></a>
                  <a href="https://www.linkedin.com/in/arya-kulkarni-726656236/" className="hover:cursor-pointer hover:text-india-green"><AiFillLinkedin size={40} className="inline"></AiFillLinkedin></a>
                  <a href="" className="hover:cursor-pointer hover:text-india-green"><AiFillFacebook size={40} className="inline"></AiFillFacebook></a>
                </div>
                <hr className="bg-neon-green"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
