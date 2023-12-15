exports.handler = async (event, context) {
    try {
        const apiKey = process.env.REACT_APP_API_KEY
        
        return {
            statusCode:200,
            body: JSON.stringify( {apiKey} )

        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify( {error: 'Failed to retrieve API key'})
        };
    }

}