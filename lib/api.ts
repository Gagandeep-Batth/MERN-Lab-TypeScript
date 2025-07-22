import axios from "axios";
const API_URL = "http://localhost:5000/api/todos";

export const fetchTodos = async () => {
  const res = await axios.get(API_URL, { withCredentials: true });
  return res.data;
};

export const createTodo = async (title: string) => {
  const res = await axios.post(API_URL, { title }, { withCredentials: true });
  return res.data;
};
