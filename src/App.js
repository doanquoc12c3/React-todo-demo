import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';

function App() {
  const todos = [
    {rowNumber:1, rowDescription: 'Feed puppy', rowAssigned: 'User one'},
    {rowNumber:2, rowDescription: 'Make plants', rowAssigned: 'User two'},
    {rowNumber:3, rowDescription: 'Make dinners', rowAssigned: 'User three'}

  ]

  const addTodo = () => {
    if(todos.length > 0){
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: 'New Todo',
        rowAssigned: 'User Three'
      };
      todos.push(newTodo);
      console.log(todos);
    }
  }

  return (
    <div className='mt-5 container'>
      <div className='card'> 
      <div className="card-header">
        Your Todo's
      </div>
      <div>
            <TodoTable todos={todos}/>
            <button className='btn btn-primary' onClick={addTodo}>
              Add new todo
              </button>
      </div>
      </div>
      
    </div>
  );
}

export default App;
