import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './Components/NavBar.js';
import Story from './Components/Story';

//Mock components
const Home = () => <h2>Home</h2>

function App() {                    
  const [stories, setStories] = useState('');
  const storyData = stories.results;
  // console.log(storyData);


  useEffect(() => {

    const fetchData = async () => {
      const apiKey = 'n92DZWsbGi92AGqOU61WrbTbzwcLBSKT';
      const url = new URL(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`)

      try {
        const data = await fetch(url);
        const response = await data.json();
        const resultsArray = response;
        // console.log(response);
        setStories(resultsArray);
        // console.log(stories);

      } catch (error) {
        console.log(error);
      }
    } 
    
    fetchData();
    

  },[]);
  // console.log(stories);
  
  

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
            <Story data={ storyData } />

        
     
    </div>
  );
}

export default App;
