import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todos";

import { Router } from "express";

const router = Router();

router.post("/", createTodo);

router.get("/", getTodos);

router.patch("/:id", updateTodo);

router.delete("/:id", deleteTodo);

export default router;
