// Controller for handling GET request to /google route
export const getResults = async (req, res) => {
  // Send a simple response for the GET request
  res.status(200).send({
    message: "Hello from Google",
  });
};

// Controller for handling POST request to /google route
export const postResults = async (req, res) => {
  try {
    // Retrieve Google API key and Custom Search Engine (CX) ID from environment variables
    const GG_API_KEY = process.env.GG_API_KEY;
    const CX = process.env.CX;

    // Extract query and start parameters from the request body
    const query = req.body.query;
    const start = req.body.start;

    // Construct the Google Custom Search API URL
    const url = `https://www.googleapis.com/customsearch/v1?key=${GG_API_KEY}&cx=${CX}&q=${query}`;
    
    // Add 'start' parameter if provided
    const finalUrl = start ? `${url}&start=${start}&num=10` : url;

    // Fetch data from the Google Custom Search API
    const response = await fetch(finalUrl);
    const data = await response.json();

    // Send the retrieved data as the response
    res.status(200).send(data);
  } catch (error) {
    // Handle errors and send an appropriate response
    console.log(error);
    res.status(500).send({ error });
  }
};
