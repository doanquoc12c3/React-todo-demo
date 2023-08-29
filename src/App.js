import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';

function App() {
  const[todos, setTodos] = useState( [
    {rowNumber:1, rowDescription: 'Feed puppy', rowAssigned: 'User one'},
    {rowNumber:2, rowDescription: 'Make plants', rowAssigned: 'User two'},
    {rowNumber:3, rowDescription: 'Make dinners', rowAssigned: 'User three'}
  ])
  let a = 0;

  const addTodo = () => {
    
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: 'New Todo',
        rowAssigned: 'User Three'
      };
      setTodos(todos => [...todos, newTodo]);
      console.log(todos);
    
  };

  const deleteTodo = () => {

      setTodos(todos => todos.filter((ele)=>{
        return ele !== todos[todos.length-1]
      }))
  }

  return (
    <div className='mt-5 container'>
      <div className='card'> 
      <div className="card-header">
        Your Todo's
      </div>
      <div class="row justify-content-between">
            <TodoTable todos={todos}/>
            <button className='col-4 btn btn-primary' class="col-4" onClick={addTodo}>
              Add new todo
              </button>
            <button className='col-4 btn btn-danger' class="col-4" onClick={deleteTodo}>
              Delete last todo
            </button>
      </div>
      </div>
      
    </div>
  );
}

export default App;
