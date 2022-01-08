import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [
  {
    id: 1,
    title: "Learn TypeScript",
    completed: false,
  },
  {
    id: 2,
    title: "Learn React",
    completed: false,
  },
  {
    id: 3,
    title: "Learn Angular",
    completed: false,
  },
];

export const createTodo: RequestHandler = (req, res, next) => {
  const { title } = req.body as { title: string };

  const todo = new Todo(Math.random(), title, false);
  TODOS.push(todo);
  res.status(201).json({
    message: "Todo created successfully",
    todo,
  });
};
