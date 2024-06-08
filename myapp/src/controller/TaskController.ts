import { Request, Response } from "express";
import { TaskModel } from "../model/TaskModel";

export default class TaskController {
  static getAllTasks() {
    return async (req: any, res: Response) => {
      try {
        const list = await TaskModel.AllTasks();
        if (list.length === 0) {
          return res.status(404).json({ error: "Task not found" });
        }
        return res.send(list);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    };
  }

  static async addTask(req: any, res: Response) {
    const { title, status, description } = req.query;

    try {
      const result = await TaskModel.AddTask(title, status, description);

      if (result !== null) {
        return res.json({ successes: true, message: "Adding success" });
      }
      return res.status(400).json({ error: "failed to add a new task" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error " });
    }
  }

  static async findTaskById(req: any, res: Response) {
    const { id } = req.query;
    try {
      const task = await TaskModel.FindTaskById(id);
      if (task === null) {
        return res.status(404).json({ error: "Task not found" });
      }
      return res.send(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async deletedTask(req: any, res: Response) {
    const { id } = req.query;

    try {
      const result = await TaskModel.DeletedTask(id);
      if (result === 0) {
        res.status(404).json({ error: "Task not found" });
      }
      return res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async editTask(req: any, res: Response) {
    const { id, title, status, description } = req.query;
    try {
      const result = await TaskModel.EditTask(id, title, status, description);
      if (result === "Task not found") {
        return res.status(404).json({ error: "Task not found" });
      }
      return res.status(200).json({ message: "Edited task successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
