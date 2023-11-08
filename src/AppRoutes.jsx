import { Route, Routes } from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import AddTodoPage from "./pages/AddTodoPage";
import AboutPage from "./pages/AboutPage";

function AppRoutes({ todos, setTodos, setCurrentTodo }) {
  return (
    <Routes>
      <Route path="/" element={<TodosPage
        setCurrentTodo={setCurrentTodo}
        todos={todos} setTodos={setTodos} >
      </TodosPage>}></Route>

      <Route path="/add" element={<AddTodoPage>
      </AddTodoPage>}></Route>

      <Route path="/about"
        element={<AboutPage></AboutPage>}></Route>

    </Routes>
  );
}

export default AppRoutes;
