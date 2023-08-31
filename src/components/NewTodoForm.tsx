import React, {useState} from 'react';


export const  NewTodoForm: React.FC<{addTodo:Function}> = (props) => {

 
    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');
    const descriptionChange = (event:any)=>{
    
        setDescription(event.target.value);
    }

    const assignedChange = (event:any) =>{
    
        setAssigned(event.target.value);
    }

    const submitNewTodo = () =>{
       
        props.addTodo(description,assigned)
        setAssigned('');
        setDescription('');
    }
    return (
        <form>
        <div className='mt-5'>
            
            
            <div className='mb-3'>
        <label className='form-label'>Assigned</label>
        <input type='text' 
            className='form-label' 
            required
            onChange={assignedChange}
            value={assigned}
        ></input>
        </div>
        <div className='mb-3'>
        <label className='form-label'>Description</label>
        <textarea className='form-control'
            rows={3} required
            onChange={descriptionChange}
            value={description}></textarea>
        </div>
        <button onClick={submitNewTodo} className='btn btn-primary mt-3'>Add</button>
                
            
        </div>
        </form>
    )
}

export default NewTodoForm