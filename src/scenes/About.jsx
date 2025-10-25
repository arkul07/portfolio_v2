import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaCode, FaRocket, FaBrain, FaCloud, FaDatabase } from "react-icons/fa";

function About() {
  const [activeTab, setActiveTab] = useState('about');
  
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const tabs = [
    { id: 'about', label: 'About Me', icon: FaBrain },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'experience', label: 'Experience', icon: FaCode },
    { id: 'expertise', label: 'Expertise', icon: FaRocket }
  ];

  const expertiseAreas = [
    { icon: FaBrain, title: "AI & Machine Learning", description: "PyTorch, TensorFlow, Scikit-learn, Computer Vision, NLP" },
    { icon: FaCode, title: "Backend Development", description: "Python, Java, FastAPI, Spring Boot, Microservices, REST APIs" },
    { icon: FaCloud, title: "Cloud & DevOps", description: "AWS, Docker, Kubernetes, Jenkins, CI/CD, Infrastructure" },
    { icon: FaDatabase, title: "Data Systems", description: "PostgreSQL, MongoDB, Redis, Apache Kafka, Data Processing" }
  ];

  return (
    <motion.section 
      className="py-20 px-4 md:px-20" 
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Graduate Computer Science student specializing in backend systems and applied AI
          </p>
        </motion.div>

        {/* Interactive Tabs */}
        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div 
          className="min-h-[500px]"
          variants={itemVariants}
        >
          <AnimatePresence mode="wait">
            {activeTab === 'about' && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 border border-primary-500/20">
                    <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Hello! I am a Graduate Computer Science student specializing in backend systems and applied AI. 
                      I have experience building scalable APIs, ML pipelines, and intelligent applications using Python, 
                      Java, and modern frameworks like FastAPI and Spring Boot.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      With a strong foundation in cloud infrastructure, data-driven development, and automation, 
                      I am passionate about integrating machine learning with reliable backend systems to create 
                      impactful, production-ready solutions.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {expertiseAreas.map((area, index) => (
                    <motion.div
                      key={area.title}
                      className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-xl p-6 border border-accent-500/20 hover:border-accent-500/40 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -5 }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg flex items-center justify-center">
                          <area.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{area.title}</h4>
                          <p className="text-sm text-gray-400">{area.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 border border-primary-500/20">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                      <FaGraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">San José State University</h3>
                      <p className="text-lg text-gray-300">M.S. in Computer Science — Focus: AI and Systems</p>
                      <p className="text-sm text-gray-400">Aug. 2025 – May. 2027 (expected)</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-600 pt-6">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl flex items-center justify-center">
                        <FaGraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">BITS Pilani</h3>
                        <p className="text-lg text-gray-300">B.E. in Computer Science (U.S. Equivalent: B.S.)</p>
                        <p className="text-sm text-gray-400">Nov. 2020 – May. 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* BlueJeans Experience */}
                <motion.div
                  className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 border border-blue-500/20"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FaCode className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">Software Engineering Intern</h3>
                          <p className="text-lg text-blue-400">BlueJeans by Verizon</p>
                          <p className="text-sm text-gray-400">July 2023 - December 2023</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {["Java", "Spring Boot", "Python", "AWS", "Jenkins"].map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Developed and optimized distributed backend microservices processing over 1M+ daily events</li>
                        <li>• Implemented asynchronous APIs and caching strategies to improve data throughput and reduce latency by 30%</li>
                        <li>• Integrated monitoring and logging in AWS + Jenkins CI/CD pipelines to improve reliability</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Research Experience */}
                <motion.div
                  className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 border border-green-500/20"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <FaBrain className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">Research Assistant — Robotics & AI Systems</h3>
                          <p className="text-lg text-green-400">BITS Pilani Robotics Lab</p>
                          <p className="text-sm text-gray-400">January 2024 - May 2024</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {["Python", "PyTorch", "React", "WebSockets", "ML"].map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Developed predictive ML models for distributed robot coordination, improving exploration efficiency by 15%</li>
                        <li>• Created real-time dashboards in React + WebSockets for data visualization and model performance tracking</li>
                        <li>• Implemented machine learning algorithms for autonomous robot navigation and coordination systems</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Printerverse Experience */}
                <motion.div
                  className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 border border-orange-500/20"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <FaCode className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">Full-Stack Developer Intern</h3>
                          <p className="text-lg text-orange-400">Printerverse</p>
                          <p className="text-sm text-gray-400">December 2022 - February 2023</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {["React", "Node.js", "SQL", "REST APIs"].map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Implemented fuzzy search and retrieval optimization for catalog data, improving precision by 35%</li>
                        <li>• Built modular React/Node.js components integrated with REST APIs and caching for fast response times</li>
                        <li>• Developed search algorithms and database optimization techniques for improved data retrieval performance</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'expertise' && (
              <motion.div
                key="expertise"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {expertiseAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-8 border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -10 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                        <area.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{area.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{area.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
