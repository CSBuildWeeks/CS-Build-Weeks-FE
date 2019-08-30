import './App.css';
import Register from './Components/Register'
import React, { Component }  from 'react';
import AppRouter from '../src/AppRouter';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Legend>
          Lambda Multi-User Dungeon (MUD)
        </Legend> */}
      <AppRouter />
      
        <a
          className="Enter-link"
          href="http://localhost:3000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Login  */}
        </a>
        <div className='register'>
          {/* <Register /> */}
        </div>
      </header>
    </div>
  );
}

export default App;

// // Styled Components
// const Legend = styled.legend`
// display: contents;
// width: 40rem;
// margin-top: 1rem;
// height: 5rem;
// font-size: 39px;
// margin: 26px;
// color: white;
// border-radius: 8px;
// border: 1px solid white;
// padding-top: 2rem;
// `