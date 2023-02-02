import { useEffect, useState } from 'react';
import './App.scss';

function App() {                    
  const [stories, setStories] = useState([]);

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
  console.log(stories);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Breaking News</h2>
      </header>
    </div>
  );
}

export default App;
