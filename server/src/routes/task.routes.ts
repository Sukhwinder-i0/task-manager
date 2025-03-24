import { RequestHandler, Router } from "express";
import { createTask, deleteTask, getTaskById, getTasks, updateTask } from "../conrollers/task.controller";

const router = Router()

router.post("/", createTask as RequestHandler);
router.get("/", getTasks as RequestHandler);
router.get("/:id", getTaskById as RequestHandler);
router.put("/:id", updateTask as RequestHandler);
router.delete("/:id", deleteTask as RequestHandler);

export default router