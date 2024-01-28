import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import routes from "./routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port http://localhost:${process.env.PORT}`)
);
