import { useContext, useMemo, useState } from "react";
import TodoItem from "./TodoItem";
import { TodoContext, useTodos } from "../../context/TodoContext";
function TodoList() {
  const todos = useTodos();

  const [isDone, setIsDone] = useState(false);

  const getFilteredTodos = () => {
    if (!isDone) {
      return todos;
    } else {
      return todos.filter((todo) => todo.done);
    }
  };

  const filteredTodos = getFilteredTodos();

  const getStatsCount = () => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.done).length;

    return { totalCount, doneCount };
  };

  const { totalCount, doneCount } = useMemo(() => getStatsCount(), [todos]);

  return (
    <>
      <div>
        <input id="isDone" type="checkbox" checked={isDone} onChange={(e) => setIsDone(e.target.checked)} />
        <label htmlFor="isDone">
          완료된 항목 보기({doneCount}/{totalCount})
        </label>
      </div>
      <ul>
        {filteredTodos.map((item) => (
          <li key={item.id}>
            <TodoItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
