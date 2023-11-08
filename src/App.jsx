import { useEffect, useState } from "react";
import AppRoutes from "./AppRoutes";
import { getTodos } from "./Api";
import { Link } from "react-router-dom";

function App() {
  //Логика поднятия состояния
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((todos) => {
      setTodos(todos.todos)
      console.log(todos);
    })
  }, [])

  //Передаем состояние вниз по дереву
  const [currentTodo, setCurrentTodo] = useState(null)

  //Передаем состояние вниз по дереву
  return(
  <div className="page">
    {currentTodo ? <div className="current-task"> Текущая задача: {currentTodo.text}</div> : null}
    <h2>Навигация</h2>
      <ul>
        <li><Link to="/">Задачи</Link></li>
        <li><Link to="/add">Добавить задачу</Link></li>
        <li><Link to="/about">О проекте</Link></li>
      </ul>
    <AppRoutes
      currentTodo={currentTodo} setCurrentTodo={setCurrentTodo}
      todos={todos} setTodos={setTodos}>
    </AppRoutes>
  </div>
  )

}

export default App;
