import express from "express";
import { showPizza } from "../controllers/pizzaController.js";

const router = express.Router();

router.get("/inventory", showPizza);

export default router;
