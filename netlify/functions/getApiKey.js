exports.handler = async (event, context) => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;

    return {
      statusCode: 200,
      body: JSON.stringify({ apiKey }),
    };
  } catch (error) {
    console.error(error);
  }
};
