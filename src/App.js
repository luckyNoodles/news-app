import { useEffect, useState } from 'react';
import './App.scss';
import NavBar from './Components/NavBar.js';
import Story from './Components/Story';

function App() {                    
  const [stories, setStories] = useState('');
  const storyData = stories.results;
//  console.log(storyData[5].multimedia);
  
 const image = storyData[5].multimedia;
 console.log(image[1].url);

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
        <NavBar />
        <h2>Breaking News</h2>
        <Story />



      </header>
    </div>
  );
}

export default App;
