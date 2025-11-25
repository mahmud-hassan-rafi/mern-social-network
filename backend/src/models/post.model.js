import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    user: {
      id: { type: String },
      name: { type: String, required: true },
      avatar: { type: String, required: true },
    },
    content: { type: String, required: true },
    media: [
      {
        type: { type: String },
        url: { type: String },
      },
    ],
    reactions: {
      like: { type: Number },
      love: { type: Number },
      wow: { type: Number },
      angry: { type: Number },
      sad: { type: Number },
    },
    comments_count: { type: Number },
    shares_count: { type: Number },
    privacy: { type: String, required: true },
    location: { type: String },
    // created_at: { type: Date, default: new Date() },
  },
  { timestamps: true }
);

//post model
const Post = new mongoose.model("Post", postSchema);
export default Post;
