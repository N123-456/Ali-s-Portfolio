import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Services from './Pages/Services';
import { BrowserRouter } from 'react-router';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Hero from './Pages/Hero';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import ContactUs from './Pages/ContactUs';
import About from './Pages/About';
function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <About/>
    <Skills/>
    <Experience/>
    <Projects/>
    <ContactUs/>
    <Footer />
    </div>
  );
}

export default App;
