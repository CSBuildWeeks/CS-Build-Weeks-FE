import './App.css';
import AppRouter from '../src/AppRouter'
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AppRouter />
        <p>
          CS Build Week:  Multi-User Dungeon (MUD)
        </p>
        <a
          className="Enter-link"
          href="http://localhost:3000/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Login  */}
        </a>
      </header>
    </div>
  );
}

export default App;
