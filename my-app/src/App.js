import React from 'react';
import './App.css';
import Register from './components/Register/Register'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          CS Build Week:  Multi-User Dungeon (MUD)
        </p>
        <a
          className="Enter-link"
          href="https://addsitehere"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter 
        </a>
        <div className='register'>
          <Register />
        </div>
        
      </header>
    </div>
  );
}

export default App;
