import React from "react";
import useMediaQuery from "../Hooks/useMediaQuery";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "@emailjs/browser";



function handeClick() {
  alert("Thank you for your response!! Will get back to you as soon as I can.");
  setTimeout(() => {
    window.location.reload();
  }, 1500);
}

function Contact() {
  const isDesktop = useMediaQuery("(min-width: 1150px)");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p3scgmn', 'template_xg2c5ul', form.current, '1lb3uqVt2bVEfAZZ6')
      .then((result) => {
          console.log(result.text);
          alert("Message received. Will get back to you as soon as I can!")
          setTimeout(() => {
            window.location.reload()
          },1000)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div
      id="contact"
      className={isDesktop ? "p-20 w-3/4 mx-auto" : "p-10 w-3/4 mx-auto"}
    >
      <div className="w-full mx-auto text-3xl flex justify-center items-center mt-5 mb-10">
        CONTACT
      </div>
      <div>
        <div className={isDesktop ? "flex justify-between" : "flex flex-col"}>
          <form
            className={
              isDesktop ? "flex flex-col w-1/2" : "flex flex-col w-full mb-20"
            }
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              placeholder="Name"
              className="my-5 p-2 rounded-lg bg-dark-jungle-green  text-neon-green"
              name="from_name"
            />
            <input
              type="email"
              placeholder="Email"
              className="my-5 p-2 rounded-lg  bg-dark-jungle-green  text-neon-green"
              name="from_email"
            />
            <textarea
              rows={10}
              cols={35}
              placeholder="Message"
              className="rounded-lg p-2 my-5 bg-dark-jungle-green  text-neon-green"
              name="message"
            />
            <button
              type="submit"
              className="bg-dark-jungle-green w-40 text-xl mx-auto mt-5 p-2 rounded-xl hover:text-india-green"
            >
              Send
            </button>
          </form>
          <div>
            <div
              className={
                isDesktop
                  ? "flex flex-col my-auto relative top-5"
                  : "flex flex-col justify-center text-center"
              }
            >
              <div className="mb-10">
                <BsFillTelephoneFill size={30} className="inline mr-5" />
                <span>+1 562-503-5564 / +91 9028083741</span>
              </div>
              <div className="mb-20">
                <FiMail
                  size={30}
                  className={isDesktop ? "inline mr-5" : "inline mr-2"}
                ></FiMail>
                <span className="text-sm">kulkarni.arya1209@gmail.com</span>
              </div>
              <div>
                <hr className="bg-neon-green" />
                <div className="flex justify-evenly my-5">
                  <a
                    href="https://github.com/arkul07"
                    className="hover:cursor-pointer hover:text-india-green"
                  >
                    <AiFillGithub size={40} className="inline"></AiFillGithub>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arya-kulkarni-726656236/"
                    className="hover:cursor-pointer hover:text-india-green"
                  >
                    <AiFillLinkedin
                      size={40}
                      className="inline"
                    ></AiFillLinkedin>
                  </a>
                  <a
                    href=""
                    className="hover:cursor-pointer hover:text-india-green"
                  >
                    <AiFillFacebook
                      size={40}
                      className="inline"
                    ></AiFillFacebook>
                  </a>
                </div>
                <hr className="bg-neon-green" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
