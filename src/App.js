import { useState } from "react";

const App = () => {

  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState("")

  const addTask = (inputValue) => {

    const newTask = {
      id: Date.now(),
      message: inputValue,
      completed: false,
    }
    setTasks([...tasks, newTask])
    setInputValue()
    console.log(tasks);
  }

  // const completedTask = (item) => {
  //   setCompletedValue(!item.completed)
  // }

  return (
    <div>
      <h1>Список задач</h1>
      <ul>
        {tasks.map((item) => {
          return (
            <li key={item.id}>{item.message}<button>Выполнено</button></li>
          )
        })}
      </ul>
      <input placeholder="Добавь задачу" onChange={(event) => setInputValue(event.target.value)}></input>
      <button onClick={() => addTask(inputValue)}>Добавить задачу</button>
    </div>
  )

}

export default App;