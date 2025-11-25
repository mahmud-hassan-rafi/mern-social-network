import express from "express";
import cors from "cors";
import databaseConnection from "./src/config/database.js";
import postRoutes from "./src/routes/postRoutes.js";
import authRoute from "./src/routes/authRoute.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import indexRoute from "./src/routes/index.route.js";
dotenv.config();

const app = express();
databaseConnection(process.env.MONGO_URI);

// global middlewares
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  })
);

// routes
app.use("/api/auth", express.json(), authRoute);
app.use("/api/posts", postRoutes);
app.use("/api", express.json(), indexRoute);

// server listening setup
app.listen(5000, () => console.log("Server listening at port 5000"));
