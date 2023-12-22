exports.handler = async (event, context) => {
  try {
    const requestBody = JSON.parse(event.body);
    const { section } = requestBody;
    const apikey = process.env.REACT_APP_API_KEY;
    

    const nytApi = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apikey}`);

    if (!nytApi.ok) {
      throw new Error(
        `Failed to fetch data from NYT API. Status code: ${nytApi.status}`
      );
    }

    const response = await nytApi.json();

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500, // Internal Server Error
      body: JSON.stringify({ error: "nodeProxy fetch error" }),
    };
  }
};
