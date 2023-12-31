import { useState } from "react";
import { postTodos } from "../Api";

export function AddTodoForm({ setTodos, }) {
  const [newTodoText, setNewTodoText] = useState("");
  const [isNewTodoLoading, setIsNewTodoLoading] = useState(false);
  const [addTodoError, setAddTodoError] = useState(null);

  const handleAddTodoClick = async () => {
    try {
      if (!newTodoText) {
        return;
      }
      setIsNewTodoLoading(true)
      const newTodos = await postTodos(newTodoText)  
      setTodos(newTodos.todos)
      setAddTodoError(null)
      setNewTodoText("");
    } catch (error) {
      setAddTodoError('Ошибка!')
    } finally {
      setIsNewTodoLoading(false)
    }
  };

  return (
    <div>
      <input
        value={newTodoText}
        onChange={(event) => {
          setNewTodoText(event.target.value);
        }}
      />
      <p style={{ color: "red" }}>{addTodoError}</p>
      <button disabled={isNewTodoLoading} onClick={handleAddTodoClick}>
        {isNewTodoLoading ? "Задача добавляется..." : "Добавить задачу"}
      </button>
    </div>
  );
}
