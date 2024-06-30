import express from "express";
import userRouter from "./routes/user.route.js";

const app = express();

app.use(express.json({ limit: "16kb" }));

// routes declaration

app.use("/api/v1/", userRouter);

// handling not found routes

app.use((req, res) => {
  res.status(404).send("Not route Found ");
});

// app.use("*", (req, res) => {
//   res.status(404).send("Not route Found ");
// });

export { app };
