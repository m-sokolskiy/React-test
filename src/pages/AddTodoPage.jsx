import { Link } from "react-router-dom";
import { AddTodoForm } from "../components/AddTodoForm";

export default function AddTodo({ setTodos, }) {

  return (
    <div className="page">
      <h1>Страница добавления задач</h1>
      <AddTodoForm setTodos={setTodos} />
    </div>
  );
}

