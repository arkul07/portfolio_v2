import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaBrain, FaServer } from "react-icons/fa";

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  
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

  const projects = [
    {
      name:"RescueLens — Real-Time AI Vision Platform",
      description:"Built an AI-driven vision system for real-time detection and prioritization in emergency scenarios using PyTorch and FastAPI. Developed asynchronous inference pipelines with WebSockets and deployed containerized services on AWS, achieving sub-200ms latency.",
      link:"https://github.com/arkul07/rescuelens",
      hosted:true,
      hostedLink:"https://rescuelens-demo.vercel.app/",
      category: "ai-ml",
      technologies: ["PyTorch", "FastAPI", "AWS", "WebSockets", "Docker"],
      icon: FaBrain,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "AI-IDS — ML-Based Intrusion Detection",
      description: "Designed and deployed a supervised ML pipeline for anomaly detection using Random Forest, CNN, and ensemble models. Built a RESTful API backend with FastAPI for live inference, achieving 12% improvement in detection accuracy.",
      link: "https://github.com/arkul07/ai-ids",
      hosted:true,
      hostedLink:"https://ai-ids-demo.vercel.app/",
      category: "ai-ml",
      technologies: ["Python", "FastAPI", "Scikit-learn", "Docker", "ML"],
      icon: FaBrain,
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Distributed Robot Coordination System",
      description: "Developed predictive ML models for distributed robot coordination, improving exploration efficiency by 15%. Created real-time dashboards in React + WebSockets for data visualization and model performance tracking.",
      link: "https://github.com/arkul07/robot-coordination",
      hosted:false,
      category: "ai-ml",
      technologies: ["Python", "PyTorch", "React", "WebSockets", "ML"],
      icon: FaRocket,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "EstateExplorer Platform",
      description: "A comprehensive real estate platform built with React.js and Node.js, featuring advanced search filters, property management, and user authentication. Integrated with Google Maps API for location services.",
      link: "https://github.com/arkul07/estateexplorer",
      hosted:true,
      hostedLink:"https://estate-explorer1.onrender.com/",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API", "Express"],
      icon: FaCode,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "AI Code Assistant",
      description: "An intelligent programming assistant powered by OpenAI API, providing real-time code suggestions, debugging help, and technical explanations. Built with React.js and TypeScript.",
      link: "https://github.com/arkul07/openai_codex",
      hosted:true,
      hostedLink:"https://openai-codex-sigma.vercel.app/",
      category: "ai-ml",
      technologies: ["React", "TypeScript", "OpenAI API", "Vercel", "AI"],
      icon: FaCode,
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Microservices Architecture",
      description: "A scalable microservices system for video recording management, built with Spring Boot, Docker, and Kubernetes. Handles 10,000+ concurrent sessions with 99.9% uptime.",
      link: "https://github.com/arkul07/microservices-recording",
      hosted:false,
      category: "backend",
      technologies: ["Java", "Spring Boot", "Docker", "Kubernetes", "Microservices"],
      icon: FaServer,
      color: "from-gray-500 to-slate-500"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'ai-ml', label: 'AI/ML Projects', count: projects.filter(p => p.category === 'ai-ml').length },
    { key: 'web', label: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { key: 'backend', label: 'Backend Systems', count: projects.filter(p => p.category === 'backend').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <motion.section 
      className="py-20 px-4 md:px-20" 
      id="projects"
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of AI/ML, web development, and backend systems projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{filter.label}</span>
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                {filter.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
                onHoverStart={() => setHoveredProject(project)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl overflow-hidden border border-gray-700 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10">
                  {/* Project Header */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Project Icon */}
                    <div className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl">
                      <project.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Live Demo Button */}
                    {project.hosted && (
                      <div className="absolute top-4 right-4 z-10">
                        <a
                          href={project.hostedLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-500/90 hover:bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105"
                        >
                          Live Demo
                        </a>
                      </div>
                    )}
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                      {project.name}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-dark-600 text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 bg-dark-600 hover:bg-dark-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <FaGithub className="w-4 h-4" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                      
                      {project.hosted && (
                        <a
                          href={project.hostedLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                          <span className="text-sm font-medium">Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl p-8 border border-primary-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Want to see more?</h3>
            <p className="text-gray-300 mb-6">Check out my GitHub for additional projects and contributions</p>
            <a 
              href="https://github.com/arkul07" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-full transition-all duration-300 hover:from-primary-600 hover:to-accent-600 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
            >
              <FaGithub className="w-5 h-5" />
              <span>Visit my GitHub</span>
              <FaExternalLinkAlt className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
    </div>
    </motion.section>
  );
}

export default Projects;
