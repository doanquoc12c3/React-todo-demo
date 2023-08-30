import React, {useState} from 'react';

function NewTodoForm(props){

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');
    const descriptionChange = (event)=>{
    
        setDescription(event.target.value);
    }

    const assignedChange = (event) =>{
    
        setAssigned(event.target.value);
    }

    const submitNewTodo = () =>{
        props.addTodo(description,assigned)
        // setAssigned('');
        // setDescription('');
    }
    return (
        <div className='mt-5'>
            <form>
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
                        row={3} required
                        onChange={descriptionChange}
                        value={description}></textarea>
                </div>
                <button type='button' className='btn btn-primary mt-3' onClick={submitNewTodo}> Add To Do</button>
            </form>
        </div>
    )
}

export default NewTodoForm