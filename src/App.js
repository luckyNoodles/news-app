// import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './Components/NavBar.js';
import Story from './Components/Story';


// NYT section URLS
const apiKey = 'n92DZWsbGi92AGqOU61WrbTbzwcLBSKT';
const topStoriesUrl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;
const businessUrl = 'https://api.nytimes.com/svc/topstories/v2/business.json?api-key=n92DZWsbGi92AGqOU61WrbTbzwcLBSKT';
const techUrl = 'https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=n92DZWsbGi92AGqOU61WrbTbzwcLBSKT';
const booksUrl = 'https://api.nytimes.com/svc/topstories/v2/books.json?api-key=n92DZWsbGi92AGqOU61WrbTbzwcLBSKT';

function App() {                    

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-wrapper">

             <NavBar /> 
        </div>
      </header>
      
      <main>
        <h2>Breaking News</h2>
            
            <Routes> 
              <Route path="/" element={ <Story api={ topStoriesUrl} /> } />
              <Route path="/business" element={ <Story api={ businessUrl} /> } />
              <Route path="/technology" element={ <Story api={ techUrl } /> } />
              <Route path="/books" element={ <Story apiKey={ booksUrl } /> } />
            </Routes>

      </main>

    </div>
  );
}

export default App;
