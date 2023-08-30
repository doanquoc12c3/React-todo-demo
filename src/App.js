import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {
  const[todos, setTodos] = useState( [
    {rowNumber:1, rowDescription: 'Feed puppy', rowAssigned: 'User one'},
    {rowNumber:2, rowDescription: 'Make plants', rowAssigned: 'User two'},
    {rowNumber:3, rowDescription: 'Make dinners', rowAssigned: 'User three'}
  ])

  const addTodo = (description, assigned) => {
      let rowNumber = 0;
      if(todos.length > 0){
        rowNumber = todos[todos.length-1].rowNumber + 1;
      } else{
        rowNumber =1;
      }
      const newTodo = {
        rowNumber:  rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo]);
      
    
  };

  const deleteTodo = (deleteTodoRowNumber) => {
      setTodos(todos => todos.filter(ele=>{
        return ele.rowNumber !== deleteTodoRowNumber
      }) ) 
  }

  return (
    <div className='mt-5 container'>
      <div className='card'> 
      <div className="card-header">
        Your Todo's
      </div>
      <div>
            <TodoTable todos={todos} deleteTodo={deleteTodo} />
            
          
            <NewTodoForm addTodo={addTodo}/>

      </div>
      </div>
      
      
    </div>
  );
}

export default App;
