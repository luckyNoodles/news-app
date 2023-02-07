// import { useParams } from "react-router-dom";
import './App.scss';
import NavBar from './Components/NavBar.js';
import SectionRouter from './Components/SectionRouter'; 
import BackToTop from './Components/BackToTop';

function App() {   
  // let { section } = useParams(); 
  // console.log(section);
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
      
    </div>
  );
}

export default App;
