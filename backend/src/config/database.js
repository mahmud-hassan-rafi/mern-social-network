import mongoose from "mongoose";

// mongoDB connnection setup
async function databaseConnection(url) {
  try {
    await mongoose.connect(url);
    console.log("Database connected ✔");
  } catch (err) {
    console.log("Error happend for", err.message);
  }
}

export default databaseConnection;
