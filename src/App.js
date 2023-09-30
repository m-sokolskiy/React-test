import { useState } from 'react';
import './App.css';

const todos = {
  todos: [
    {
      text: "посмотреть новый урок",
      id: 15,
      created_at: "2023-07-05T15:14:15.080Z",
      user: null,
    },
    {
      text: "сдать домашку",
      id: 16,
      created_at: "2023-07-05T15:14:42.499Z",
      user: null,
    },
    {
      text: "поплакать",
      id: 17,
      created_at: "2023-07-05T15:14:42.499Z",
      user: null,
    },
  ]
}

const App = () => { 

  const [value, setValue] = useState('');

  const addTodo = () => {
    alert('clicked')
  };

  return (
    <div>
      <ul>
        {todos.todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
        <input value={value} onChange={(event) => {
          setValue(event.target.value)
        }} />
        <button onClick={addTodo}>Добавить</button>
    </div>
  );
}

export default App;
