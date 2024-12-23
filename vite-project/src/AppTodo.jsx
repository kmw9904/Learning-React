import "./App.css";
import TodoList from "./components/todo/TodoList";
import AddTodo from "./components/todo/AddTodo";
import { TodoProvider } from "./context/TodoContext";
import { useEffect } from "react";

function AppTodo() {

  return (
    <TodoProvider>
      <h2>할일 목록</h2>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}

export default AppTodo;
