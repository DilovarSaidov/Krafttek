import modul from "../db/db";

export class TaskModel {
  static async AllTasks() {
    const result = await modul.tasks.findAll();
    const tasks = result.map((task) => ({
      id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
      created_at: task.created_at,
      updated_at: task.updated_at,
    }));
    return tasks;
  }

  static async AddTask(
    title: string,
    status: "выполняется" | "выполнено",
    description: string
  ) {
    try {
      const newTask = await modul.tasks.create({
        title,
        status,
        description,
      });
      return newTask;
    } catch (error) {
      console.error("Error while adding task:", error);
      return null;
    }
  }

  static async FindTaskById(id: number) {
    const result = await modul.tasks.findByPk(id);
    return result;
  }

  // Delete by id
  static async DeletedTask(id: number) {
    const result = await modul.tasks.destroy({
      where: {
        id: id,
      },
    });
    return result;
  }

  static async EditTask(
    id: number,
    title: string,
    status: "выполняется" | "выполнено",
    description: string
  ) {
    const task = await modul.tasks.findByPk(id);
    if (!task) {
      return "Task not found";
    }
    task.title = title;
    task.status = status;
    task.description = description;
    await task.save();
    return task;
  }
}
