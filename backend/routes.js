import express from 'express';
import { getChatResponses, postChatResponses } from './controllers/openaiController.js';
import { getResults, postResults } from './controllers/googleController.js';

const router = express.Router();

router.get('/openai', getChatResponses);
router.post('/openai', postChatResponses);

router.get('/google', getResults);
router.post('/google', postResults);

export default router;
