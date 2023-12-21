import { Routes, Route } from "react-router-dom";
import Fetch from "./Fetch";
import ErrorPage from "./ErrorPage";

function SectionRouter(props) {

  const apiKey = props.apikey;

  const proxyUrl = "https://daily-times-headlines.netlify.app//.netlify/functions/nodeProxy";
    // const proxyUrl = "http://localhost:8888/.netlify/functions/nodeProxy";


  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Fetch section={"home"} apiUrl={proxyUrl} apikey={apiKey} />}
        />
        <Route
          path="/world"
          element={
            <Fetch section={"world"} apiUrl={proxyUrl} apikey={apiKey} />
          }
        />
        <Route
          path="/us"
          element={<Fetch sectionl={"us"} apiUrl={proxyUrl} apikey={apiKey} />}
        />
        <Route
          path="/politics"
          element={
            <Fetch section={"politics"} apiUrl={proxyUrl} apikey={apiKey} />
          }
        />
        <Route
          path="/nyregion"
          element={
            <Fetch section={"nyregion"} apiUrl={proxyUrl} apikey={apiKey} />
          }
        />
        <Route
          path="/business"
          element={
            <Fetch section={"business"} apiUrl={proxyUrl} apikey={apiKey} />
          }
        />
        <Route
          path="/opinion"
          element={
            <Fetch section={"opinion"} apiUrl={proxyUrl} apikey={apiKey} />
          }
        />
        <Route
          path="/science"
          element={
            <Fetch section={"science"} apiUrl={proxyUrl} apikey={apiKey} />
          }
        />
        <Route
          path="/health"
          element={
            <Fetch section={"health"} apiUrl={proxyUrl} apikey={apiKey} />
          }
        />
        <Route
          path="/sports"
          element={
            <Fetch section={"sports"} apiUrl={proxyUrl} apikey={apiKey} />
          }
        />
        <Route
          path="/arts"
          element={<Fetch section={"arts"} apiUrl={proxyUrl} apikey={apiKey} />}
        />
        <Route
          path="/books"
          element={
            <Fetch section={"books"} apiUrl={proxyUrl} apikey={apiKey} />
          }
        />
        <Route
          path="/style"
          element={
            <Fetch section={"style"} apiUrl={proxyUrl} apikey={apiKey} />
          }
        />
        <Route
          path="/food"
          element={<Fetch section={"food"} apiUrl={proxyUrl} apikey={apiKey} />}
        />
        <Route
          path="/travel"
          element={
            <Fetch section={"travel"} apiUrl={proxyUrl} apikey={apiKey} />
          }
        />
        <Route
          path="/magazine"
          element={
            <Fetch section={"magazine"} apiUrl={proxyUrl} apikey={apiKey} />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default SectionRouter;
