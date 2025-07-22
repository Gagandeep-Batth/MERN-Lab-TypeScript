import express from "express";
import Todo from "../models/Todo";

const router = express.Router();

router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

router.post("/", async (req, res) => {
  const { title } = req.body;
  const newTodo = await Todo.create({ title });
  res.status(201).json(newTodo);
});
export default router;
