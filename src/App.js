import './App.scss';
import NavBar from './Components/NavBar.js';
import SectionRouter from './Components/SectionRouter'; 
import BackToTop from './Components/BackToTop';
import Footer from './Components/Footer';
import Reload from './Components/Reload';

function App() {   
  return (
    <div className="App">
      
      <header className="App-header">
        <div className="App-wrapper">
          <NavBar /> 
        </div>
      </header>

      <main className="App-wrapper"> 
        <div className="back">
          <BackToTop /> 
        </div>
        <SectionRouter />
      </main>

      <Footer />
      <Reload />
    </div>
  );
}

export default App;
