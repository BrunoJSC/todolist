import express from "express";
import cors from "cors";
import taskRoutes from "./api/routes/taskRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
