import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany();
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while trying to fetch tasks" });
  }
};

export const getTasksId = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const task = await prisma.task.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    return res.status(200).json(task);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while trying to fetch a task" });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, completed = false } = req.body;

    if (!title && !completed) {
      return res.status(400).send("Title is required.");
    }

    const newTask = await prisma.task.create({
      data: { title, completed },
    });

    return res.status(201).json(newTask);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while trying to create a task" });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  try {
    const updatedTask = await prisma.task.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        completed,
      },
    });

    res.status(200).json(updatedTask);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while trying to update a task" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(204).send();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while trying to delete a task" });
  }
};
