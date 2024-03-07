import express from "express";
import {
  Login,
  Logout,
  Profile,
  Register,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/login", Login);
router.post("/", Register);
router.post("/logout", Logout);
router.get("/profile", Profile);

export default router;
