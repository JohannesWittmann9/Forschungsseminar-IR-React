// Importing necessary modules and libraries
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import routes from "./routes.js";
import mongoose from "mongoose";

// Load environment variables from a .env file
dotenv.config();

// Create an Express application
const app = express();
const PORT = process.env.PORT || 6001;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Set up routes
app.use("/", routes);

/* mongoose setup */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
