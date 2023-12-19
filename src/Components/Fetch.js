import { useEffect, useState } from "react";
import Story from "./Story";

function Fetch({ apiUrl }) {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(apiUrl);
        const response = await data.json();
        const resultsArray = response;

        setStories(resultsArray.results);
      } catch (error) {
        console.log(
          `An error occured while fetching data ${error}. Please try again.`
        );
      }
    };
    fetchData();
  }, [apiUrl]);

  return <Story apiData={stories} />;
}

export default Fetch;
