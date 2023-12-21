import "./App.scss";
import NavBar from "./Components/NavBar.js";
import SectionRouter from "./Components/SectionRouter";
import BackToTop from "./Components/BackToTop";
import Footer from "./Components/Footer";
import {useState, useEffect} from "react";

function App() {
  const [apiKey, setApiKey] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          // "http://localhost:8888/.netlify/functions/getApiKey"
          "https://daily-times-headlines.netlify.app/.netlify/functions/getApiKey"
          // "https://dev-news-app.netlify.app/.netlify/functions/getApiKey"
        );
        const data = await response.json();
        const resApiKey = data.apiKey;
        setApiKey(resApiKey);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch API key:", error);
      }
    };

    fetchData();
  }, []);

  // Render loading indicator while apiKey is being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-wrapper">
          <NavBar />
        </div>
      </header>

      <main className="App-wrapper">
        <div className="back">
          <BackToTop />
        </div>

        <SectionRouter apikey={apiKey} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
