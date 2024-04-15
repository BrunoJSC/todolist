import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTasks,
  getTasksId,
  updateTask,
} from "../controllers/taskController";

const router = Router(); // Cria Router do express

router.get("/", getTasks); // Rota GET /tasks
router.get("/:id", getTasksId); // Rota GET /tasks/:id
router.post("/", createTask); // Rota POST /tasks
router.put("/:id", updateTask); // Rota PUT /tasks/:id
router.delete("/:id", deleteTask); // Rota DELETE /tasks/:id

export default router; // Exporta o router
