import React from 'react';
import Welcome from './welcome.js';
import './App.css';
import Projects from './projects.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome/>
        <Projects/>
      </header>
    </div>
  );
}

export default App;
