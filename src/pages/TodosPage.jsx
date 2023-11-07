import { useEffect, useState } from "react";
import { AddTodoForm } from "../components/AddTodoForm";
import { deleteTodos, getTodos } from "../Api";

export default function TodosPage() {
  const [todos, setTodos] = useState([]);
  // const [deleteTodoError, setDeleteTodoError] = useState(null);

  useEffect(() => {
    getTodos().then((todos) => {
      setTodos(todos.todos)
      console.log(todos);
    })
  }, [])

  const deleteTodo = (id) => {
    deleteTodos(id).then((response) => setTodos(response.todos)).catch((error) => {
      alert("Ошибка!")
    })
  };


  return (
    <div className="page">
      <h1>Список задач</h1>
      {/* <p>{deleteTodoError}</p> */}
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}<button onClick={() => deleteTodo(todo.id)}>Удалить</button></li>;
        })}
      </ul>

      <AddTodoForm todos={todos} setTodos={setTodos} />
    </div>
  );
}

