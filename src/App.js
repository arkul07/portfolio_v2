import './App.css';
import Navbar from "./scenes/Navbar"
import Profile from './scenes/Profile';
import Skills from './scenes/Skills';
import About from './scenes/About';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';
import Sidebar from './scenes/Sidebar';
import { motion } from "framer-motion";
import { useState } from 'react';

function App() {


  return (
    <div className="App font-titilium bg-[url('./assets/Meteor.svg')] text-neon-green">
     <Navbar/>
     <Sidebar/>
     <Profile/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
