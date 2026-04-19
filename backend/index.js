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
    origin: [
      "http://localhost:5173",
      "https://facebook-ui-clone-orcin.vercel.app",
    ],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use("/", (req, res) => res.send("API is working!"));

// routes
app.use("/api/auth", express.json(), authRoute);
app.use("/api/posts", postRoutes);
app.use("/api", express.json(), indexRoute);

export default app;
