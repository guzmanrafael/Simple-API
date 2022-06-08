import { Router } from "express";
import { TaskController } from "./task.controller";
import { TaskRepository } from "./task.repository";

const router = Router();

const controller = new TaskController(new TaskRepository());

router.get("/tasks", controller.getAll.bind(controller));
router.get("/tasks/:taskId", controller.getById.bind(controller));
router.post("/tasks", controller.create.bind(controller));
router.put("/tasks/:taskId", controller.update.bind(controller));
router.delete("/tasks/:taskId", controller.remove.bind(controller));

export default router;
