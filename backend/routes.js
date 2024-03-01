// Importing the necessary modules and controllers
import express from "express";
import {
  getChatResponses,
  postChatResponses,
} from "./controllers/openaiController.js";
import { getResults, postResults } from "./controllers/googleController.js";
import { addUser } from "./controllers/userController.js";
import { addPreStudy } from "./controllers/preStudyController.js";
import { addPreTask } from "./controllers/preTaskController.js";
import { addSearchInteraction } from "./controllers/searchInteractionController.js";
import { addDocument } from "./controllers/docController.js";
import { addChatInteraction } from "./controllers/chatInteractionController.js";
import { addPostTask } from "./controllers/postTaskController.js";
import { addPostStudy } from "./controllers/postStudyController.js";

// Create a router instance from Express
const router = express.Router();

// Define routes for OpenAI chat responses
router.get("/openai", getChatResponses); // GET request for retrieving OpenAI chat responses
router.post("/openai", postChatResponses); // POST request for posting chat responses to OpenAI

// Define routes for Google search results
router.get("/google", getResults); // GET request for retrieving Google search results
router.post("/google", postResults); // POST request for posting search results to Google

// Define routes for adding data to database
router.post("/api/users", addUser);
router.post("/api/prestudies", addPreStudy);
router.post("/api/pretasks", addPreTask);
router.post("/api/searchinteractions", addSearchInteraction);
router.post("/api/documents", addDocument);
router.post("/api/chatinteractions", addChatInteraction);
router.post("/api/posttasks", addPostTask);
router.post("/api/poststudies", addPostStudy);

// Export the router to be used in other parts of the application
export default router;
