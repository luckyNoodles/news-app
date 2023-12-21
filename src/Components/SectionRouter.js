import { Routes, Route } from "react-router-dom";
import Fetch from "./Fetch";
import ErrorPage from "./ErrorPage";

function SectionRouter(props) {

  const apikey = props.apikey;

  // const proxyUrl = "https://daily-times-headlines.netlify.app/.netlify/functions/nodeProxy";
   const proxyUrl = "https://dev-news-app.netlify.app/.netlify/functions/nodeProxy";
    // const proxyUrl = "http://localhost:8888/.netlify/functions/nodeProxy";


  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Fetch section={"home"} apiUrl={proxyUrl} apikey={apikey} />}
        />
        <Route
          path="/world"
          element={
            <Fetch section={"world"} apiUrl={proxyUrl} apikey={apikey} />
          }
        />
        <Route
          path="/us"
          element={<Fetch sectionl={"us"} apiUrl={proxyUrl} apikey={apikey} />}
        />
        <Route
          path="/politics"
          element={
            <Fetch section={"politics"} apiUrl={proxyUrl} apikey={apikey} />
          }
        />
        <Route
          path="/nyregion"
          element={
            <Fetch section={"nyregion"} apiUrl={proxyUrl} apikey={apikey} />
          }
        />
        <Route
          path="/business"
          element={
            <Fetch section={"business"} apiUrl={proxyUrl} apikey={apikey} />
          }
        />
        <Route
          path="/opinion"
          element={
            <Fetch section={"opinion"} apiUrl={proxyUrl} apikey={apikey} />
          }
        />
        <Route
          path="/science"
          element={
            <Fetch section={"science"} apiUrl={proxyUrl} apikey={apikey} />
          }
        />
        <Route
          path="/health"
          element={
            <Fetch section={"health"} apiUrl={proxyUrl} apikey={apikey} />
          }
        />
        <Route
          path="/sports"
          element={
            <Fetch section={"sports"} apiUrl={proxyUrl} apikey={apikey} />
          }
        />
        <Route
          path="/arts"
          element={<Fetch section={"arts"} apiUrl={proxyUrl} apikey={apikey} />}
        />
        <Route
          path="/books"
          element={
            <Fetch section={"books"} apiUrl={proxyUrl} apikey={apikey} />
          }
        />
        <Route
          path="/style"
          element={
            <Fetch section={"style"} apiUrl={proxyUrl} apikey={apikey} />
          }
        />
        <Route
          path="/food"
          element={<Fetch section={"food"} apiUrl={proxyUrl} apikey={apikey} />}
        />
        <Route
          path="/travel"
          element={
            <Fetch section={"travel"} apiUrl={proxyUrl} apikey={apikey} />
          }
        />
        <Route
          path="/magazine"
          element={
            <Fetch section={"magazine"} apiUrl={proxyUrl} apikey={apikey} />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default SectionRouter;
