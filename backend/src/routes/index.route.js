import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/", (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    res
      .status(401)
      .json({ message: "You have to login first", success: false });
  } else {
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode);
      res.json({ message: "suceess" });
    } catch (error) {
      console.log(error.message);
    }
  }
});

export default router;
