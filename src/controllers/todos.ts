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

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({
    todos: TODOS,
  });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const { id } = req.params;
  const { title, completed } = req.body as {
    title: string;
    completed: boolean;
  };

  const todo = TODOS.find((t) => t.id === +id);
  if (todo) {
    todo.title = title;
    todo.completed = completed;
  }
  res.json({
    message: "Todo updated successfully",
    todo,
  });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const { id } = req.params;
  const todoIndex = TODOS.findIndex((t) => t.id === +id);
  if (todoIndex >= 0) {
    TODOS.splice(todoIndex, 1);
  }
  res.json({
    message: "Todo deleted successfully",
  });
};
