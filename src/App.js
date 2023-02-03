import './App.css';
import Navbar from "./scenes/Navbar"
import Profile from './scenes/Profile';
import Skills from './scenes/Skills';
import About from './scenes/About';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';

function App() {
  return (
    <div className="App font-sans bg-rich-black text-neon-green">
     <Navbar/>
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
