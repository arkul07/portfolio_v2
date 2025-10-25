import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Interactive Skill Card Component
function SkillCard({ skill, index, isHovered, onHover, onUnhover }) {
  const [isClicked, setIsClicked] = useState(false);
  
  const getColor = (proficiency) => {
    switch (proficiency) {
      case 3: return 'from-green-500 to-emerald-600';
      case 2: return 'from-blue-500 to-cyan-600';
      case 1: return 'from-orange-500 to-yellow-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getGlowColor = (proficiency) => {
    switch (proficiency) {
      case 3: return 'shadow-green-500/50';
      case 2: return 'shadow-blue-500/50';
      case 1: return 'shadow-orange-500/50';
      default: return 'shadow-gray-500/50';
    }
  };

  const getLevelText = (proficiency) => {
    switch (proficiency) {
      case 3: return 'Advanced';
      case 2: return 'Intermediate';
      case 1: return 'Basic';
      default: return 'Learning';
    }
  };

  return (
    <motion.div
      className={`relative group cursor-pointer`}
      onHoverStart={() => onHover(skill)}
      onHoverEnd={() => onUnhover()}
      onClick={() => setIsClicked(!isClicked)}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        y: [0, -10, 0],
        transition: {
          duration: 3 + index * 0.2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      {/* 3D Card Effect */}
      <div className={`relative w-32 h-40 mx-auto perspective-1000`}>
        <motion.div
          className={`w-full h-full bg-gradient-to-br ${getColor(skill.proficiency)} rounded-xl shadow-2xl ${getGlowColor(skill.proficiency)} transition-all duration-300`}
          whileHover={{
            boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${skill.proficiency === 3 ? 'rgba(34, 197, 94, 0.5)' : skill.proficiency === 2 ? 'rgba(59, 130, 246, 0.5)' : 'rgba(245, 158, 11, 0.5)'}`
          }}
          style={{
            transformStyle: 'preserve-3d',
            transform: isHovered ? 'rotateY(10deg) rotateX(5deg)' : 'rotateY(0deg) rotateX(0deg)'
          }}
        >
          {/* Card Content */}
          <div className="p-4 h-full flex flex-col items-center justify-center text-white">
            {/* Skill Icon */}
            <div className="w-12 h-12 mb-3 flex items-center justify-center">
              <img 
                src={skill.icon} 
                alt={skill.name}
                className="w-full h-full object-contain filter brightness-0 invert"
              />
            </div>
            
            {/* Skill Name */}
            <h3 className="text-sm font-bold text-center mb-2 leading-tight">
              {skill.name}
            </h3>
            
            {/* Proficiency Level */}
            <div className="text-xs text-white/80 mb-2">
              {getLevelText(skill.proficiency)}
            </div>
            
            {/* Proficiency Dots */}
            <div className="flex space-x-1">
              {[1, 2, 3].map((level) => (
                <div
                  key={level}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    level <= skill.proficiency 
                      ? 'bg-white shadow-lg' 
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Hover Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at center, ${skill.proficiency === 3 ? 'rgba(34, 197, 94, 0.3)' : skill.proficiency === 2 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(245, 158, 11, 0.3)'} 0%, transparent 70%)`
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

// Floating Particles Background
function FloatingParticles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 5
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

// Main Interactive Skills Component
function SkillsInteractive({ skillsData }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const handleSkillHover = (skill) => {
    setHoveredSkill(skill);
  };
  
  const handleSkillUnhover = () => {
    setHoveredSkill(null);
  };

  // Categorize skills
  const frontendSkills = skillsData.filter(skill => 
    ['React.js', 'Svelte.js', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Redux.js', 'TailwindCSS', 'Next.js'].includes(skill.name)
  );
  
  const backendSkills = skillsData.filter(skill => 
    ['Python', 'Java', 'FastAPI', 'Spring Boot', 'Node.js', 'Flask', 'REST APIs', 'Microservices'].includes(skill.name)
  );
  
  const otherSkills = skillsData.filter(skill => 
    !frontendSkills.includes(skill) && !backendSkills.includes(skill)
  );

  const getCurrentSkills = () => {
    switch (selectedCategory) {
      case 'frontend': return frontendSkills;
      case 'backend': return backendSkills;
      case 'other': return otherSkills;
      default: return skillsData;
    }
  };

  return (
    <div className="w-full min-h-[600px] bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 rounded-xl overflow-hidden relative">
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* Header */}
      <div className="relative z-10 p-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Interactive Skills Showcase</h3>
        <p className="text-gray-300 mb-6">Hover over skills to explore my technical expertise</p>
        
        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-8">
          {[
            { key: 'all', label: 'All Skills', count: skillsData.length },
            { key: 'frontend', label: 'Frontend', count: frontendSkills.length },
            { key: 'backend', label: 'Backend', count: backendSkills.length },
            { key: 'other', label: 'AI/ML & DevOps', count: otherSkills.length }
          ].map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.key
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 px-6 pb-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
          layout
        >
          <AnimatePresence>
            {getCurrentSkills().map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <SkillCard
                  skill={skill}
                  index={index}
                  isHovered={hoveredSkill?.name === skill.name}
                  onHover={handleSkillHover}
                  onUnhover={handleSkillUnhover}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Hovered Skill Info */}
      <AnimatePresence>
        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-6 left-6 right-6 z-20"
          >
            <div className="bg-gradient-to-r from-dark-800/95 to-dark-700/95 backdrop-blur-md rounded-xl p-6 border border-primary-500/30 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ 
                      backgroundColor: hoveredSkill.proficiency === 3 ? '#22c55e' : 
                                     hoveredSkill.proficiency === 2 ? '#3b82f6' : '#f59e0b'
                    }}
                  />
                  <div>
                    <h4 className="text-xl font-bold text-white">{hoveredSkill.name}</h4>
                    <p className="text-sm text-gray-300">
                      {hoveredSkill.proficiency === 3 ? 'Advanced Level - Expert' : 
                       hoveredSkill.proficiency === 2 ? 'Intermediate Level - Proficient' : 'Basic Level - Learning'}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3].map((level) => (
                    <div
                      key={level}
                      className={`w-3 h-3 rounded-full ${
                        level <= hoveredSkill.proficiency 
                          ? (hoveredSkill.proficiency === 3 ? 'bg-green-500' : 
                             hoveredSkill.proficiency === 2 ? 'bg-blue-500' : 'bg-orange-500')
                          : 'bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="absolute top-6 right-6 z-10">
        <div className="bg-dark-800/50 backdrop-blur-sm rounded-lg p-4 text-white/80 text-sm">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span>Advanced</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span>Intermediate</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full" />
              <span>Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsInteractive;
