import { useReducer, useState } from "react";
import "./App.css";
import TodoList from "./components/todo/TodoList";
import todoReducer from "./reducer/todo-reducer";
import { useImmerReducer } from "use-immer";

function AppTodo(props) {
  const [todoText, setTodoText] = useState("");
  const [todos, dispatch] = useImmerReducer(todoReducer, [
    { id: 0, text: "HTML&CSS 공부하기", done: false },
    { id: 1, text: "자바스크립트 공부하기", done: false },
  ]);

  const [insertAt, setInsertAt] = useState(todos.length - 1);

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  };

  // 1] added
  const handleAddTodo = (e) => {
    dispatch({
      type: "added",
      nextId: todos.length,
      todoText,
    });
    // const nextId = todos.length;
    // // push X
    // setTodos([...todos, { id: nextId, text: todoText, done: false }]);
    setTodoText("");
  };
  // 2] added_index
  const handleAddTodoByIndex = (e) => {
    dispatch({
      type: "added_index",
      insertAt,
      nextId: todos.length,
      todoText,
    });
    setTodoText("");
  };

  // 3] deleted
  const handleDeleteTodo = (deleteId) => {
    dispatch({ type: "deleted", deleteId });
  };

  // 4] done
  const handleToggleTodo = (id, done) => {
    dispatch({ type: "done", id, done });
  };

  // 5] reverse
  const handleReverse = () => {
    dispatch({ type: "reverse" });
  };

  const handleEnterAddTodo = (e) => {
    console.log("isComposing :", e.nativeEvent.isComposing);
    if (e.keyCode === 13 && e.nativeEvent.isComposing === false) {
      handleAddTodo();
    }
  };

  const handleInsertAt = (e) => {
    setInsertAt(e.target.value);
  };

  return (
    <div>
      <h2>할일 목록</h2>
      <div>
        <input type="text" value={todoText} onChange={handleTodoTextChange} onKeyDown={handleEnterAddTodo} />
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <div>
        <select value={insertAt} onChange={handleInsertAt}>
          {todos.map((_, index) => (
            <option value={index}>{index} 번째</option>
          ))}
        </select>
        <button onClick={handleAddTodoByIndex}>{insertAt}번째 추가</button>
      </div>
      <div>Preview : {todoText}</div>
      <button onClick={handleReverse}>Reverse</button>
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
    </div>
  );
}

export default AppTodo;
