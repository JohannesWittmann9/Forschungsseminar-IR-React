// Importing necessary modules and libraries
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import routes from "./routes.js";

// Load environment variables from a .env file
dotenv.config();

// Create an Express application
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Set up routes
app.use("/", routes);

// Start the server and listen on the specified port
app.listen(process.env.PORT, () =>
  console.log(`Server is running on port http://localhost:${process.env.PORT}`)
);
