import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

function Profile() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center px-4 py-20" 
      id="aryakulkarni"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            Hi, I'm Arya Kulkarni
          </h1>
          <motion.div 
            className="text-2xl md:text-3xl text-gray-300 mb-2"
            variants={itemVariants}
          >
            Graduate Computer Science Student
          </motion.div>
          <motion.div 
            className="text-lg md:text-xl text-gray-400 mb-1"
            variants={itemVariants}
          >
            M.S. Computer Science — AI & Systems Focus
          </motion.div>
          <motion.div 
            className="text-sm md:text-base text-gray-500"
            variants={itemVariants}
          >
            San José State University | Expected: May 2027
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <a 
            href="/Arya_Kulkarni_Resume_SDE.pdf"
            download="Arya_Kulkarni_Resume_SDE.pdf"
            className="group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full transition-all duration-300 hover:from-primary-600 hover:to-primary-700 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </a>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/arkul07" 
              className="p-3 bg-dark-700 rounded-full hover:bg-primary-500 transition-colors duration-300 group"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl group-hover:text-white" />
            </a>
            <a 
              href="https://linkedin.com/in/arya-kulkarni1" 
              className="p-3 bg-dark-700 rounded-full hover:bg-accent-500 transition-colors duration-300 group"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl group-hover:text-white" />
            </a>
            <a 
              href="mailto:kulkarni.arya1209@gmail.com" 
              className="p-3 bg-dark-700 rounded-full hover:bg-primary-500 transition-colors duration-300 group"
              aria-label="Email"
            >
              <FaEnvelope className="text-xl group-hover:text-white" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Graduate Computer Science student specializing in backend systems and applied AI. 
            Experienced in building scalable APIs, ML pipelines, and intelligent applications using Python, Java, and modern frameworks.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Profile;
