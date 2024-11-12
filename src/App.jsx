import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
