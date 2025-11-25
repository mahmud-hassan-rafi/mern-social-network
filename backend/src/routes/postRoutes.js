import express from "express";
import { createNewPost, getAllPost } from "../controllers/controller.js";
import { upload } from "../middlewares/upload/fileupload.middleware.js";
import path from "path";

const router = express.Router();

router.get("/", express.json(), getAllPost);

// creating post
router.post(
  "/create-post",
  upload.single("media"),
  express.static(path.join(process.cwd(), "src", "upload", "uploads")),
  createNewPost
);

export default router;
