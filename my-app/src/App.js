import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';

function App() {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />

    </main>
      
    </>
  );
}

export default App;
