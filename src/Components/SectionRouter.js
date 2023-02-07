import { Routes, Route } from 'react-router-dom';
import Fetch from './Fetch';

function SectionRouter () {
    //nyt Api key    
    const apiKey = 'n92DZWsbGi92AGqOU61WrbTbzwcLBSKT';
    
    //Section urls
    const topStoriesUrl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;
    const world = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`;
    const us = `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${apiKey}`;
    const politics = `https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=${apiKey}`;
    const nyregion = `https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=${apiKey}`;
    const business = `https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${apiKey}`;
    const opinion = `https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=${apiKey}`;
    const science = `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${apiKey}`;
    const health = `https://api.nytimes.com/svc/topstories/v2/health.json?api-key=${apiKey}`;
    const sports = `https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=${apiKey}`;
    const arts = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKey}`;
    const books = `https://api.nytimes.com/svc/topstories/v2/books.json?api-key=${apiKey}`;
    const style = `https://api.nytimes.com/svc/topstories/v2/style.json?api-key=${apiKey}`;
    const food = `https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${apiKey}`;
    const travel = `https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${apiKey}`;
    const magazine = `https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=${apiKey}`;
    // const techUrl = `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${apiKey}`;

    return (
        
        <div>
            <Routes> 
                <Route path="/world" element={ <Fetch api={ world } /> } />
                <Route path="/" element={ <Fetch api={ topStoriesUrl} /> } />
                <Route path="/us" element={ <Fetch api={ us } /> } />
                <Route path="/politics" element={ <Fetch api={ politics } /> } />
                <Route path="/nyregion" element={ <Fetch api={ nyregion } /> } />
                <Route path="/business" element={ <Fetch api={ business} /> } />
                <Route path="/opinion" element={ <Fetch api={ opinion } /> } />
                <Route path="/science" element={ <Fetch api={ science } /> } />
                <Route path="/health" element={ <Fetch api={ health } /> } />
                <Route path="/sports" element={ <Fetch api={ sports } /> } />
                <Route path="/arts" element={ <Fetch api={ arts } /> } />
                <Route path="/books" element={ <Fetch api={ books } /> } />
                <Route path="/style" element={ <Fetch api={ style } /> } />
                <Route path="/food" element={ <Fetch api={ food } /> } />
                <Route path="/travel" element={ <Fetch api={ travel } /> } />
                <Route path="/magazine" element={ <Fetch api={ magazine } /> } />
            </Routes>
        </div>

    )

}
export default SectionRouter;
