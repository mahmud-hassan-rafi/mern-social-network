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
      res.status(200).json({ message: "success", success: true });
    } catch (error) {
      console.log(error.message);
      res
        .status(401)
        .json({ message: "Token verification failed", success: false });
    }
  }
});

export default router;
