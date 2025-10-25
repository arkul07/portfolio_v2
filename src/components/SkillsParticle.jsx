import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Sphere, Box, Torus, Cylinder, Html, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Particle System for background effects
function ParticleField({ count = 200 }) {
  const mesh = useRef();
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, [count]);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });
  
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(particles, 3));
    return geo;
  }, [particles]);

  return (
    <points ref={mesh} geometry={geometry}>
      <pointsMaterial size={0.02} color="#3b82f6" transparent opacity={0.6} />
    </points>
  );
}

// Floating Skill Orb with advanced animations
function SkillOrb({ position, skill, index, isHovered, onHover, onUnhover }) {
  const meshRef = useRef();
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  // Different shapes and sizes
  const shapes = [
    <Sphere args={[0.6, 16, 16]} />,
    <Box args={[1, 1, 1]} />,
    <Torus args={[0.5, 0.2, 8, 16]} />,
    <Cylinder args={[0.5, 0.5, 1, 8]} />,
    <Sphere args={[0.7, 12, 12]} />
  ];
  
  const shape = shapes[index % shapes.length];
  
  // Advanced animations
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      
      // Rotation
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
      meshRef.current.rotation.z = time * 0.1;
      
      // Floating motion
      meshRef.current.position.y = position[1] + Math.sin(time + index) * 0.2;
      meshRef.current.position.x = position[0] + Math.cos(time * 0.5 + index) * 0.1;
      
      // Hover effects
      if (hover || isHovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.5, 1.5, 1.5), 0.1);
        meshRef.current.position.z = position[2] + 0.5;
      } else if (clicked) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
        meshRef.current.position.z = position[2];
      }
    }
  });

  // Dynamic colors based on proficiency
  const getColor = (proficiency) => {
    const colors = {
      3: '#22c55e', // Green - Advanced
      2: '#3b82f6', // Blue - Intermediate  
      1: '#f59e0b'  // Orange - Basic
    };
    return colors[proficiency] || '#6b7280';
  };

  const getEmissiveColor = (proficiency) => {
    const colors = {
      3: '#10b981', // Bright green
      2: '#2563eb', // Bright blue
      1: '#d97706'  // Bright orange
    };
    return colors[proficiency] || '#4b5563';
  };

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          setClicked(!clicked);
        }}
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
          emissive={hover ? getEmissiveColor(skill.proficiency) : '#000000'}
          emissiveIntensity={hover ? 0.3 : 0}
        />
      </mesh>
      
      {/* Skill name with glow effect */}
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
      
      {/* Proficiency level with color coding */}
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

// Main 3D Scene with advanced effects
function SkillsParticleScene({ skills, onSkillHover, onSkillUnhover, hoveredSkill }) {
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
      {/* Advanced lighting setup */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[-10, -10, -5]} intensity={0.6} color="#3b82f6" />
      <pointLight position={[10, -10, 5]} intensity={0.4} color="#22c55e" />
      
      {/* Background particles */}
      <ParticleField count={150} />
      
      {/* Starfield background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Skill orbs arranged in a dynamic formation */}
      {skills.map((skill, index) => {
        // Create a more dynamic arrangement
        const radius = 2.5 + Math.sin(index) * 0.5;
        const angle = (index / skills.length) * Math.PI * 2;
        const height = Math.sin(index * 0.5) * 1.5;
        
        const x = Math.cos(angle) * radius;
        const y = height;
        const z = Math.sin(angle) * radius;
        
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
      
      {/* Enhanced info display */}
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

// Main 3D Skills Component with particle effects
function SkillsParticle({ skillsData }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const handleSkillHover = (skill) => {
    setHoveredSkill(skill);
  };
  
  const handleSkillUnhover = () => {
    setHoveredSkill(null);
  };

  // Error boundary for 3D content
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
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        <SkillsParticleScene 
          skills={skillsData}
          onSkillHover={handleSkillHover}
          onSkillUnhover={handleSkillUnhover}
          hoveredSkill={hoveredSkill}
        />
      </Canvas>
      
      {/* Enhanced UI overlay */}
      <div className="absolute top-4 left-4 text-white/80 text-sm bg-dark-800/50 backdrop-blur-sm rounded-lg px-3 py-2">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span>Interactive 3D Skills</span>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4 text-white/70 text-sm bg-dark-800/50 backdrop-blur-sm rounded-lg px-3 py-2">
        <div className="flex items-center space-x-4">
          <span>Hover for details</span>
          <span>•</span>
          <span>Click to focus</span>
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

export default SkillsParticle;
