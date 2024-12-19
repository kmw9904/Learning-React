import { useState } from "react";
import "./App.css";
import TodoList from "./components/todo/TodoList";

function AppTodo(props) {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([
    { id: 0, text: "HTML&CSS 공부하기", done: false },
    { id: 1, text: "자바스크립트 공부하기", done: false },
  ]);
  const [insertAt, setInsertAt] = useState(todos.length - 1);

  const handleTodoTextChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = (e) => {
    const nextId = todos.length;
    // push X
    setTodos([...todos, { id: nextId, text: todoText }]);
    setTodoText("");
  };

  const handleDeleteTodo = (deleteId) => {
    const newTodos = todos.filter((item) => item.id !== deleteId);
    setTodos(newTodos);
  };

  const handleEnterAddTodo = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  const handleToggleTodo = (id, done) => {
    // 기존 배열 안의 객체 속성을 변경
    const nextTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, done };
      }
      return item;
    });
    setTodos(nextTodos);
  };

  const handleInsertAt = (e) => {
    setInsertAt(e.target.value);
  };

  const handleAddTodoByIndex = (e) => {
    const nextId = todos.length;
    const newTodos = [
      // 삽입 지점 이전 항목
      ...todos.slice(0, insertAt),
      { id: nextId, text: todoText, done: false },
      // 삽입 지점 이후 항목
      ...todos.slice(insertAt),
    ];
    setTodos(newTodos);
    setTodoText("");
  };

  const handleReverse = () => {
    setTodos(todos.toReversed());
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
