import express from "express";

import TaskController from "../controller/TaskController";

const router = express.Router();

router.get("/all-tasks", TaskController.getAllTasks());
router.post("/add-task", TaskController.addTask);
router.get("/find-task", TaskController.findTaskById);
// Deleted task by id
router.delete("/deleted-task", TaskController.deletedTask);
// Edit task by id
router.put("/edit-task", TaskController.editTask);

export default router;
