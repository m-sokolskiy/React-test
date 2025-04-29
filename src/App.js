import { useEffect, useState } from "react";

const App = () => {

  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState("")

  const addTask = (inputValue) => {

    const newTask = {
      id: Date.now(),
      message: inputValue,
      completed: false,
    }

    if (inputValue.length <= 0) {
      alert("Введите задачу")
    } else {
      setTasks([...tasks, newTask])
      setInputValue("")
    }
  }

  useEffect(() => {
    console.log(inputValue);
  }, [])

  const completedTask = (data) => {
    return !data
  }

  const completedTasks = () => {
    return setTasks(tasks.filter((el) => el.completed === true)) 
  }


  return (
    <div>
      <h1>Список задач</h1>
      <button>Все</button>
      <button>Активные</button>
      <button onClick={() => completedTasks()}>Выполненные</button>
      <ul>
        {tasks.map((item) => {
          return (
            <li key={item.id}>{item.message}<button onClick={() => completedTask(item.completed)}>Выполнено</button><button>Удалить</button></li>
          )
        })}
      </ul>
      <input value={inputValue} placeholder="Добавь задачу" onChange={(event) => setInputValue(event.target.value)}></input>
      <button onClick={() => addTask(inputValue)}>Добавить задачу</button>
    </div>
  )

}

export default App;