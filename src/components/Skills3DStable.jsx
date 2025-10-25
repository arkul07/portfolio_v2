import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Sphere, Box, Torus, Cylinder, Html, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Simple floating skill orb
function SkillOrb({ position, skill, index, isHovered, onHover, onUnhover }) {
  const meshRef = useRef();
  const [hover, setHover] = useState(false);
  
  // Different shapes for variety
  const shapes = [
    <Sphere args={[0.6, 16, 16]} />,
    <Box args={[1, 1, 1]} />,
    <Torus args={[0.5, 0.2, 8, 16]} />,
    <Cylinder args={[0.5, 0.5, 1, 8]} />
  ];
  
  const shape = shapes[index % shapes.length];
  
  // Animate the object
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      
      // Rotation
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
      
      // Floating motion
      meshRef.current.position.y = position[1] + Math.sin(time + index) * 0.2;
      
      // Hover effects
      if (hover || isHovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.4, 1.4, 1.4), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  // Color based on proficiency
  const getColor = (proficiency) => {
    switch (proficiency) {
      case 3: return '#22c55e'; // Green for advanced
      case 2: return '#3b82f6'; // Blue for intermediate  
      case 1: return '#f59e0b'; // Orange for basic
      default: return '#6b7280'; // Gray
    }
  };

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHover(true);
          onHover(skill);
        }}
        onPointerOut={(e) => {
          setHover(false);
          onUnhover();
        }}
      >
        {shape}
        <meshStandardMaterial 
          color={getColor(skill.proficiency)}
          metalness={0.4}
          roughness={0.3}
          emissive={hover ? getColor(skill.proficiency) : '#000000'}
          emissiveIntensity={hover ? 0.3 : 0}
        />
      </mesh>
      
      {/* Skill name text */}
      <Text
        position={[0, -1.2, 0]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.5}
        textAlign="center"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {skill.name}
      </Text>
      
      {/* Proficiency level */}
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.15}
        color={getColor(skill.proficiency)}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.01}
        outlineColor="#000000"
      >
        {skill.proficiency === 3 ? '★ Advanced' : 
         skill.proficiency === 2 ? '● Intermediate' : '○ Basic'}
      </Text>
    </group>
  );
}

// Main 3D Scene
function Skills3DScene({ skills, onSkillHover, onSkillUnhover, hoveredSkill }) {
  const { camera } = useThree();
  
  // Auto-rotate camera
  useFrame((state) => {
    const time = state.clock.elapsedTime * 0.1;
    camera.position.x = Math.sin(time) * 8;
    camera.position.z = Math.cos(time) * 8;
    camera.position.y = 2;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[-10, -10, -5]} intensity={0.6} color="#3b82f6" />
      <pointLight position={[10, -10, 5]} intensity={0.4} color="#22c55e" />
      
      {/* Background stars */}
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      
      {/* Skill orbs arranged in a sphere */}
      {skills.map((skill, index) => {
        // Arrange skills in a sphere formation
        const radius = 2.5;
        const phi = Math.acos(1 - 2 * (index + 0.5) / skills.length);
        const theta = Math.PI * (1 + Math.sqrt(5)) * (index + 0.5);
        
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        
        return (
          <SkillOrb
            key={skill.name}
            position={[x, y, z]}
            skill={skill}
            index={index}
            isHovered={hoveredSkill?.name === skill.name}
            onHover={onSkillHover}
            onUnhover={onSkillUnhover}
          />
        );
      })}
      
      {/* Info display */}
      {hoveredSkill && (
        <Html center position={[0, 2, 0]}>
          <div className="bg-gradient-to-r from-dark-800/95 to-dark-700/95 backdrop-blur-md rounded-xl p-6 text-white max-w-sm border border-primary-500/30 shadow-2xl">
            <div className="flex items-center mb-3">
              <div 
                className="w-4 h-4 rounded-full mr-3"
                style={{ 
                  backgroundColor: hoveredSkill.proficiency === 3 ? '#22c55e' : 
                                 hoveredSkill.proficiency === 2 ? '#3b82f6' : '#f59e0b'
                }}
              />
              <h3 className="text-xl font-bold">{hoveredSkill.name}</h3>
            </div>
            <p className="text-sm text-gray-300 mb-2">
              {hoveredSkill.proficiency === 3 ? 'Advanced Level - Expert' : 
               hoveredSkill.proficiency === 2 ? 'Intermediate Level - Proficient' : 'Basic Level - Learning'}
            </p>
            <div className="flex space-x-1">
              {[1, 2, 3].map((level) => (
                <div
                  key={level}
                  className={`w-2 h-2 rounded-full ${
                    level <= hoveredSkill.proficiency 
                      ? (hoveredSkill.proficiency === 3 ? 'bg-green-500' : 
                         hoveredSkill.proficiency === 2 ? 'bg-blue-500' : 'bg-orange-500')
                      : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </Html>
      )}
    </>
  );
}

// Main 3D Skills Component
function Skills3DStable({ skillsData }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const handleSkillHover = (skill) => {
    setHoveredSkill(skill);
  };
  
  const handleSkillUnhover = () => {
    setHoveredSkill(null);
  };

  // Error boundary
  if (!skillsData || skillsData.length === 0) {
    return (
      <div className="w-full h-[500px] bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 rounded-xl flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-2xl mb-2">🚀</div>
          <div>Loading 3D Skills...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 rounded-xl overflow-hidden relative">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true }}
      >
        <Skills3DScene 
          skills={skillsData}
          onSkillHover={handleSkillHover}
          onSkillUnhover={handleSkillUnhover}
          hoveredSkill={hoveredSkill}
        />
      </Canvas>
      
      {/* UI overlay */}
      <div className="absolute top-4 left-4 text-white/80 text-sm bg-dark-800/50 backdrop-blur-sm rounded-lg px-3 py-2">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span>Interactive 3D Skills</span>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4 text-white/70 text-sm bg-dark-800/50 backdrop-blur-sm rounded-lg px-3 py-2">
        <div className="flex items-center space-x-4">
          <span>Hover for details</span>
        </div>
      </div>
      
      {/* Legend */}
      <div className="absolute top-4 right-4 text-white/80 text-xs bg-dark-800/50 backdrop-blur-sm rounded-lg p-3">
        <div className="space-y-1">
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
  );
}

export default Skills3DStable;
