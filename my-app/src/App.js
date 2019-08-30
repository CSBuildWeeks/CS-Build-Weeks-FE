import './App.css';
import Register from './Components/Register'
import React, { Component }  from 'react';
import AppRouter from '../src/AppRouter';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AppRouter />
      
        <a
          className="Enter-link"
          href="http://localhost:3000/"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <div className='register'>
        </div>
      </header>
    </div>
  );
}

export default App;