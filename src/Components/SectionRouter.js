import { Routes, Route } from "react-router-dom";
import Fetch from "./Fetch";
// import ErrorPage from "./ErrorPage";

function SectionRouter(props) {
  const { apiKey } = props;
  const proxyUrl = "http://localhost:8888/.netlify/functions/nodeProxy";


  //Section urls
  const topStoriesUrl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`;
  // const world = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`;
  // const us = `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${apiKey}`;
  // const politics = `https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=${apiKey}`;
  // const nyregion = `https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=${apiKey}`;
  // const business = `https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${apiKey}`;
  // const opinion = `https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=${apiKey}`;
  // const science = `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${apiKey}`;
  // const health = `https://api.nytimes.com/svc/topstories/v2/health.json?api-key=${apiKey}`;
  // const sports = `https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=${apiKey}`;
  // const arts = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKey}`;
  // const books = `https://api.nytimes.com/svc/topstories/v2/books.json?api-key=${apiKey}`;
  // const style = `https://api.nytimes.com/svc/topstories/v2/style.json?api-key=${apiKey}`;
  // const food = `https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${apiKey}`;
  // const travel = `https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${apiKey}`;
  // const magazine = `https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=${apiKey}`;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Fetch apiUrl={proxyUrl} url={topStoriesUrl} />} />
        {/* <Route path="/world" element={<Fetch apiUrl={world} apikey={apiKey} />} />
        <Route path="/us" element={<Fetch apiUrl={us} apikey={apiKey} />} />
        <Route path="/politics" element={<Fetch apiUrl={politics} apikey={apiKey} />} />
        <Route path="/nyregion" element={<Fetch apiUrl={nyregion} apikey={apiKey} />} />
        <Route path="/business" element={<Fetch apiUrl={business} apikey={apiKey} />} />
        <Route path="/opinion" element={<Fetch apiUrl={opinion} apikey={apiKey} />} />
        <Route path="/science" element={<Fetch apiUrl={science} apikey={apiKey} />} />
        <Route path="/health" element={<Fetch apiUrl={health} apikey={apiKey} />} />
        <Route path="/sports" element={<Fetch apiUrl={sports} apikey={apiKey} />} />
        <Route path="/arts" element={<Fetch apiUrl={arts} apikey={apiKey} />} />
        <Route path="/books" element={<Fetch apiUrl={books} apikey={apiKey} />} />
        <Route path="/style" element={<Fetch apiUrl={style} apikey={apiKey} />} />
        <Route path="/food" element={<Fetch apiUrl={food} apikey={apiKey} />} />
        <Route path="/travel" element={<Fetch apiUrl={travel} apikey={apiKey} />} />
        <Route path="/magazine" element={<Fetch apiUrl={magazine} apikey={apiKey} />} />
        <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
}
export default SectionRouter;

// return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Fetch apiUrl={proxyUrl} apikey={apiKey} />} />
//         <Route path="/world" element={<Fetch apiUrl={world} apikey={apiKey} />} />
//         <Route path="/us" element={<Fetch apiUrl={us} apikey={apiKey} />} />
//         <Route path="/politics" element={<Fetch apiUrl={politics} apikey={apiKey} />} />
//         <Route path="/nyregion" element={<Fetch apiUrl={nyregion} apikey={apiKey} />} />
//         <Route path="/business" element={<Fetch apiUrl={business} apikey={apiKey} />} />
//         <Route path="/opinion" element={<Fetch apiUrl={opinion} apikey={apiKey} />} />
//         <Route path="/science" element={<Fetch apiUrl={science} apikey={apiKey} />} />
//         <Route path="/health" element={<Fetch apiUrl={health} apikey={apiKey} />} />
//         <Route path="/sports" element={<Fetch apiUrl={sports} apikey={apiKey} />} />
//         <Route path="/arts" element={<Fetch apiUrl={arts} apikey={apiKey} />} />
//         <Route path="/books" element={<Fetch apiUrl={books} apikey={apiKey} />} />
//         <Route path="/style" element={<Fetch apiUrl={style} apikey={apiKey} />} />
//         <Route path="/food" element={<Fetch apiUrl={food} apikey={apiKey} />} />
//         <Route path="/travel" element={<Fetch apiUrl={travel} apikey={apiKey} />} />
//         <Route path="/magazine" element={<Fetch apiUrl={magazine} apikey={apiKey} />} />
//         <Route path="*" element={<ErrorPage />} />
//       </Routes>
//     </div>
//   );