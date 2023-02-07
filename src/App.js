import './App.scss';
import NavBar from './Components/NavBar.js';
import SectionRouter from './Components/SectionRouter'; 

function App() {    
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-wrapper">
          <NavBar /> 
        </div>
      </header>
      <main className="App-wrapper">  
        <SectionRouter />
      </main>
    </div>
  );
}

export default App;
