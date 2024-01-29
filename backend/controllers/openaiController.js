// Import the OpenAI library
import OpenAI from "openai";

// Controller for handling GET request to /openai route
export const getChatResponses = async (req, res) => {
  // Send a simple response for the GET request
  res.status(200).send({
    message: "Hello from Codex",
  });
};

// Controller for handling POST request to /openai route
export const postChatResponses = async (req, res) => {
  try {
    // Create an instance of the OpenAI class with the API key
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Extract the prompt from the request body
    const prompt = req.body.prompt;

    // Make a chat-based completion request to OpenAI's GPT-3.5-turbo model
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    // Send the generated response from the bot as the API response
    res.status(200).send({
      bot: response.data.choices[0].message.text,
    });
  } catch (error) {
    // Handle errors and send an appropriate response
    console.log(error);
    res.status(500).send({ error });
  }
};
