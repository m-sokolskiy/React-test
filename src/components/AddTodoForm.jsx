import { useState } from "react";
import { postTodos } from "../Api";

export function AddTodoForm({ setTodos,}) {
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodoClick = async () => {
    if (!newTodoText) {
      return;
    }

    const newTodos = await postTodos(newTodoText)

    setTodos(newTodos.todos)

    setNewTodoText("");
  };

  return (
    <div>
      <input
        value={newTodoText}
        onChange={(event) => {
          setNewTodoText(event.target.value);
        }}
      />
      <button onClick={handleAddTodoClick}>Добавить задачу</button>
    </div>
  );
}
