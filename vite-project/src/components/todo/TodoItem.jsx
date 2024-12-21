import { useContext } from "react";
import { TodoDispatchContext, useDispatch } from "../../context/TodoContext";

export default function TodoItem({ item }) {
  useDispatch()

  // 3] deleted
  const handleDeleteTodo = (deleteId) => {
    dispatch({ type: "deleted", deleteId });
  };

  // 4] done
  const handleToggleTodo = (id, done) => {
    dispatch({ type: "done", id, done });
  };

  return (
    <label htmlFor="">
      <input type="checkbox" checked={item.done} onChange={(e) => handleToggleTodo(item.id, e.target.checked)} />
      <span>{item.done ? <del>{item.text}</del> : item.text}</span>
      <button onClick={() => handleDeleteTodo(item.id)}>X</button>
    </label>
  );
}
