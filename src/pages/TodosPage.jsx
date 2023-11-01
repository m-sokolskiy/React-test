import { useEffect, useState } from "react";
import { AddTodoForm } from "../components/AddTodoForm";
import { deleteTodos, getTodos } from "../Api";

export default function TodosPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((todos) => {
      setTodos(todos.todos)
      console.log(todos);
    })
  }, [])

  const deleteTodo = (id) => {
    deleteTodos(id).then((response) => setTodos(response.todos))
    console.log(id);
  }
  
  return (
    <div className="page">
      <h1>Список задач</h1>

      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}<button onClick={() => deleteTodo(todo.id)}>Удалить</button></li>;
        })}
      </ul>

      <AddTodoForm todos={todos} setTodos={setTodos} />
    </div>
  );
}
