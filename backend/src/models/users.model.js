import mongoose from "mongoose";
import path from "path";

const userSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthday: { type: Date, required: true },
  gender: { type: String, required: true },
  profilePicture: {
    type: String,
    unique: true,
    default: path.join(
      process.cwd(),
      "src",
      "assets",
      "default-profle-male.jpg"
    ),
  },
});

const User = mongoose.model("User", userSchema);
export default User;
