const axios = require("axios");

exports.handler = async (event, context) => {
  try {
    const requestBody = JSON.parse(event.body);
    const { section } = requestBody;
    const apiKey = process.env.REACT_APP_API_KEY;

    const response = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json`,
      {
        params: {
          "api-key": apiKey,
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500, // Internal Server Error
      body: JSON.stringify({ error: "nodeProxy Axios error" }),
    };
  }
};
