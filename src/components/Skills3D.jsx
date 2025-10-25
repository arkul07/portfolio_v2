import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Sphere, Box, Torus, Cylinder, Html } from '@react-three/drei';
import * as THREE from 'three';

// 3D Skill Object Component
function SkillObject({ position, skill, index, isHovered, onHover, onUnhover }) {
  const meshRef = useRef();
  const [hover, setHover] = useState(false);
  
  // Different shapes for variety
  const shapes = [
    <Sphere args={[0.8, 16, 16]} />,
    <Box args={[1.2, 1.2, 1.2]} />,
    <Torus args={[0.6, 0.3, 8, 16]} />,
    <Cylinder args={[0.6, 0.6, 1.2, 8]} />
  ];
  
  const shape = shapes[index % shapes.length];
  
  // Animate the object
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.1;
      
      // Hover scale effect
      if (hover || isHovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
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
          metalness={0.3}
          roughness={0.4}
          emissive={hover ? getColor(skill.proficiency) : '#000000'}
          emissiveIntensity={hover ? 0.2 : 0}
        />
      </mesh>
      
      {/* Skill name text */}
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
        textAlign="center"
      >
        {skill.name}
      </Text>
      
      {/* Proficiency indicator */}
      <Text
        position={[0, -1.8, 0]}
        fontSize={0.2}
        color={getColor(skill.proficiency)}
        anchorX="center"
        anchorY="middle"
      >
        {skill.proficiency === 3 ? 'Advanced' : 
         skill.proficiency === 2 ? 'Intermediate' : 'Basic'}
      </Text>
    </group>
  );
}

// Main 3D Skills Scene
function SkillsScene({ skills, onSkillHover, onSkillUnhover, hoveredSkill }) {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
      
      {/* Skill objects arranged in a sphere */}
      {skills.map((skill, index) => {
        // Arrange skills in a sphere formation
        const radius = 3;
        const phi = Math.acos(1 - 2 * (index + 0.5) / skills.length);
        const theta = Math.PI * (1 + Math.sqrt(5)) * (index + 0.5);
        
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        
        return (
          <SkillObject
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
      
      {/* Central info display */}
      {hoveredSkill && (
        <Html center position={[0, 0, 0]}>
          <div className="bg-dark-800/90 backdrop-blur-sm rounded-lg p-4 text-white max-w-xs">
            <h3 className="text-lg font-bold mb-2">{hoveredSkill.name}</h3>
            <p className="text-sm text-gray-300">
              {hoveredSkill.proficiency === 3 ? 'Advanced Level' : 
               hoveredSkill.proficiency === 2 ? 'Intermediate Level' : 'Basic Level'}
            </p>
          </div>
        </Html>
      )}
    </>
  );
}

// Main 3D Skills Component
function Skills3D({ skillsData }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const handleSkillHover = (skill) => {
    setHoveredSkill(skill);
  };
  
  const handleSkillUnhover = () => {
    setHoveredSkill(null);
  };

  return (
    <div className="w-full h-96 bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <SkillsScene 
          skills={skillsData}
          onSkillHover={handleSkillHover}
          onSkillUnhover={handleSkillUnhover}
          hoveredSkill={hoveredSkill}
        />
      </Canvas>
      
      {/* Instructions */}
      <div className="absolute bottom-4 left-4 text-white/70 text-sm">
        Hover over skills to see details
      </div>
    </div>
  );
}

export default Skills3D;
