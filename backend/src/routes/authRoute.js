import express from "express";
import {
  handleSignupRoute,
  handleLoginRoute,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", handleSignupRoute);
router.post("/login", handleLoginRoute);

export default router;
