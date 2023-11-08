import { deleteTodos } from "../Api";
import { Link } from "react-router-dom";

export default function TodosPage({ todos, setTodos, setCurrentTodo }) {

  const deleteTodo = (id) => {
    deleteTodos(id).then((response) => setTodos(response.todos)).catch((error) => {
      alert("Ошибка!")
    })
  };

  return (
    <div className="page">
      <h1>Список задач</h1>
      <ul>
        {todos.map((todo) => {
          return <li className="todo-item"
            onClick={() => setCurrentTodo(todo)}
            key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Удалить</button></li>;
        })}
      </ul>
    </div>
  );
}

