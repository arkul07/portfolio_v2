import './App.css';
import Navbar from "./scenes/Navbar"
import Profile from './scenes/Profile';
import Skills from './scenes/Skills';
import About from './scenes/About';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';
import Sidebar from './scenes/Sidebar';

function App() {
  return (
    <div className="App font-sans bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white min-h-screen">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[url('./assets/Meteor.svg')] opacity-10 pointer-events-none"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar/>
        <Sidebar/>
        <Profile/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
