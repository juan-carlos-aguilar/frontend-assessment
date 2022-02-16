import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { isDefaultClause } from 'typescript';
import './App.css';
// Import Components
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';


const App: React.FC = () => {

  // States that give functionality
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, {
        id: Date.now(), 
        todo: todo, 
        isDone: false
      }])
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} 
                setTodos={setTodos} 
                completedTodos={completedTodos} 
                setCompletedTodos={setCompletedTodos} 
        />
      </div>
    </DragDropContext>

  );
}

export default App;
