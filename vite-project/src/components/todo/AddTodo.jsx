import { useContext, useState } from "react";
import { TodoContext, TodoDispatchContext, useDispatch, useTodos } from "../../context/TodoContext";

export default function AddTodo() {
  const [todoText, setTodoText] = useState("");

  useTodos()
  useDispatch()

  // 1] added
  const handleAddTodo = (text) => {
    dispatch({
      type: "added",
      nextId: todos.length,
      todoText: text,
    });
  };
  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={(e) => {
          if (e.keyCode === 13 && e.nativeEvent.isComposing === false) {
            handleAddTodo(e.target.value);
            setTodoText("");
          }
        }}
      />
      <button
        onClick={() => {
          // 저장
          setTodoText("");
          handleAddTodo(todoText);
        }}
      >
        추가
      </button>
    </div>
  );
}
