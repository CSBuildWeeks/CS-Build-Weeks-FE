import './App.css';
import Register from './components/Register/Register'

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
        <div className='register'>
          <Register />
        </div>
        
      </header>
    </div>
  );
}

export default App;
