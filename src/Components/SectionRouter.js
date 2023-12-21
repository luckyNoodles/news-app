import { Routes, Route } from "react-router-dom";
import Fetch from "./Fetch";
import ErrorPage from "./ErrorPage";

function SectionRouter() {

  const proxyUrl = "https://daily-times-headlines.netlify.app/.netlify/functions/nodeProxy";
    // const proxyUrl = "http://localhost:8888/.netlify/functions/nodeProxy";

  return (
    <div>
      <Routes>
        <Route path="/" element={<Fetch section={'home'} apiUrl={proxyUrl} />} />
        <Route path="/world" element={<Fetch section={'world'} apiUrl={proxyUrl} />} />
        <Route path="/us" element={<Fetch sectionl={'us'} apiUrl={proxyUrl} />} />
        <Route path="/politics" element={<Fetch section={'politics'} apiUrl={proxyUrl} />} />
        <Route path="/nyregion" element={<Fetch section={'nyregion'} apiUrl={proxyUrl} />} />
        <Route path="/business" element={<Fetch section={'business'} apiUrl={proxyUrl} />} />
        <Route path="/opinion" element={<Fetch section={'opinion'} apiUrl={proxyUrl} />} />
        <Route path="/science" element={<Fetch section={'science'} apiUrl={proxyUrl} />} />
        <Route path="/health" element={<Fetch section={'health'} apiUrl={proxyUrl} />} />
        <Route path="/sports" element={<Fetch section={'sports'} apiUrl={proxyUrl} />} />
        <Route path="/arts" element={<Fetch section={'arts'} apiUrl={proxyUrl} />} />
        <Route path="/books" element={<Fetch section={'books'} apiUrl={proxyUrl} />} />
        <Route path="/style" element={<Fetch section={'style'} apiUrl={proxyUrl} />} />
        <Route path="/food" element={<Fetch section={'food'} apiUrl={proxyUrl} />} />
        <Route path="/travel" element={<Fetch section={'travel'} apiUrl={proxyUrl} />} />
        <Route path="/magazine" element={<Fetch section={'magazine'} apiUrl={proxyUrl} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default SectionRouter;
