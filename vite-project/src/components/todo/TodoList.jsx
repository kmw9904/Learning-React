import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext, useTodos } from "../../context/TodoContext";
function TodoList() {
  useTodos()
  
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          <TodoItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
