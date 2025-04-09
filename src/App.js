const App = () => {

  const tasks = [
    { id: 1, name: 'Тренировка' },
    { id: 2, name: 'Учёба' },
    { id: 3, name: 'Код' }
  ];

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  );
}

export default App;
