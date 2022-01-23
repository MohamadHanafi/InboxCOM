import express from "express";
import dotenv from "dotenv";
import colors from "colors"; // for console logs
import morgan from "morgan"; // for logging requests

import connectDb from "./config/db.js"; // connect to database

import { notFound, errorHandler } from "./middleware/errorsMiddleware.js"; // error handling middleware;

//routers
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";

dotenv.config();

connectDb();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/messages", messageRouter);

const port = process.env.PORT || 5000;

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`.yellow.bold);
});
