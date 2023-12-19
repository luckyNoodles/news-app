exports.handler = async (event, context) => {
  try {
    const requestBody = JSON.parse(event.body);
    const { url } = requestBody;
    // const nytUrl = url
    
    const nytApi = await fetch(url);
    

    if (!nytApi.ok) {
      throw new Error(
        `Failed to fetch data from NYT API. Status code: ${nytApi.status}`
      );
    }

    const data = await nytApi.json();
    

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500, // Internal Server Error
      body: JSON.stringify({ error: "An error occurred" }),
    };
  }
};
