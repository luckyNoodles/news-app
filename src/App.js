// import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './Components/NavBar.js';
import Story from './Components/Story';

//Mock components
const Home = () => <h2>Home</h2>

function App() {                    

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-wrapper">

          <Routes> 
            <Route path="/" element={ <Home /> } />
          </Routes>

             <NavBar /> 

        </div>
      </header>
            <h2>Breaking News</h2>
            <Story />

        
     
    </div>
  );
}

export default App;
