import { useEffect, useState } from "react";
import Story from "./Story";

function Fetch({ apiUrl, section }) {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(apiUrl, {
          method: "POST",
          body: JSON.stringify({ section }),
        });

        if (!data.ok) {
          throw new Error(`Failed to fetch data. Status code: ${data.status}`);
        }

        const response = await data.json();
        setStories(response.results);
        setLoading(false);
      } catch (error) {
        console.error(`An error occurred while fetching data: ${error}`);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, section]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <Story apiData={stories} />;
}

export default Fetch;
