// Importing the necessary modules and controllers
import express from 'express';
import { getChatResponses, postChatResponses } from './controllers/openaiController.js';
import { getResults, postResults } from './controllers/googleController.js';

// Create a router instance from Express
const router = express.Router();

// Define routes for OpenAI chat responses
router.get('/openai', getChatResponses);    // GET request for retrieving OpenAI chat responses
router.post('/openai', postChatResponses);  // POST request for posting chat responses to OpenAI

// Define routes for Google search results
router.get('/google', getResults);    // GET request for retrieving Google search results
router.post('/google', postResults);  // POST request for posting search results to Google

// Export the router to be used in other parts of the application
export default router;
