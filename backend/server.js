import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import pizzaRoutes from "./routes/pizzaRoutes.js";

dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api", pizzaRoutes);
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => res.send("Server is ready!"));

app.listen(port, () => console.log(`Server started at port ${port}`));
