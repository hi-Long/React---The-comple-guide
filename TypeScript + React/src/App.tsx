import { useState } from 'react';
import './App.css';
import NewToDo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const onAddToDo = (todo: string) => {
    setTodos(prevTodos => [...prevTodos, new Todo(todo)])
  }

  const onRemoveToDo = (id: string) => {
    const newTodos = todos.filter(t => t.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <NewToDo onAddToDo={onAddToDo}></NewToDo>
      <Todos items={todos} onRemoveTodo={onRemoveToDo}></Todos>
    </div>
  );
}

export default App;
