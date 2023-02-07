import { Routes, Route } from 'react-router-dom';
import Story from './Story';

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
    const techUrl = `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${apiKey}`;

    return (
        
        <div>
            <Routes> 
                <Route path="/" element={ <Story api={ topStoriesUrl} /> } />
                <Route path="/world" element={ <Story api={ world } /> } />
                <Route path="/us" element={ <Story api={ us } /> } />
                <Route path="/politics" element={ <Story api={ politics } /> } />
                <Route path="/nyregion" element={ <Story api={ nyregion } /> } />
                <Route path="/business" element={ <Story api={ business} /> } />
                <Route path="/opinion" element={ <Story api={ opinion } /> } />
                <Route path="/science" element={ <Story api={ science } /> } />
                <Route path="/health" element={ <Story api={ health } /> } />
                <Route path="/sports" element={ <Story api={ sports } /> } />
                <Route path="/arts" element={ <Story api={ arts } /> } />
                <Route path="/books" element={ <Story api={ books } /> } />
                <Route path="/style" element={ <Story api={ style } /> } />
                <Route path="/food" element={ <Story api={ food } /> } />
                <Route path="/travel" element={ <Story api={ travel } /> } />
                <Route path="/magazine" element={ <Story api={ magazine } /> } />
            </Routes>
        </div>

    )

}
export default SectionRouter;
