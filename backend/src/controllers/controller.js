import mongoose from "mongoose";
import Post from "../models/post.model.js";

export async function getAllPost(req, res) {
  const page = parseInt(req.query.page) || 2;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const posts = await Post.find({}).skip(skip).limit(limit);
  res.json(posts);
}

export const createNewPost = (req, res) => {
  console.log("Body:", req.body);
  console.log("File:", req.file);

  // try {
  //   if (!req.file) throw new Error();
  // } catch (error) {
  //   res.status(400).json({ error: true, message: error.message });
  // }

  res.json({
    success: true,
    content: req.body?.content,
    file: req?.file?.filename,
  });
};
