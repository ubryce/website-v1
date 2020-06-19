import React from 'react';
import './App.css';
import Navs from './Components/Nav';
import Work from'./Components/Work';
import About from'./Components/About';
import Contact from './Components/Contact';
import Display from './Components/Display';

function App() {
  return (
    <div className="App">
      <Navs/>
      <Display/>
      <Work/>
      <About/>
      <Contact/>

    </div>
  );
}

export default App;
