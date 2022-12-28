import React, {useState} from 'react';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux'
import { tickTask } from '../../redux/actions'

import { editMode } from '../../redux/actions'
import { saveEdit } from '../../redux/actions'
import {deleteTask} from '../../redux/actions'
import './task.css'


//* make a form 
//* button type submit
//* onSubmit func saves changes

function Task({ task }) {
    const [taskName, setTaskName] = useState(task.taskName)
    const dispatch = useDispatch();

    const onChangeHandler = (event) =>{
        setTaskName(event.target.value)
    }

    //* saves the change
    const onSubmitHandler = async (event) =>{
        try{
            event.preventDefault();
            if(!taskName) return alert('It is empty!');
            
            const response = await fetch(`http://localhost:3001/${task.id}`, {
                method:'PATCH',
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify({taskName:taskName})
            })
            dispatch(saveEdit(task.id, taskName))


            if(!response.ok)
            throw new Error(`
            Response err: ${response.status}, ${response.statusText}
            `)



         
        }catch(err){
            console.log(err);
            alert("ERR",err)
        }
        
    }


    const onDelHandler = async()=>{
        try{
             await fetch(`http://localhost:3001/${task.id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
            }

            })
            dispatch(deleteTask(task.id))
            
        }catch(err){
            console.log(err);
            alert(err)
        }
        
    }

    // const [isDone, setIsDone] = useState(task.isDone)

    const onCheckHandler = async ()=>{
     

        try{
            await fetch(`http://localhost:3001/tick/${task.id}`, {
                method:'PATCH',
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({isDone:task.isDone})
            })

            dispatch(tickTask(task.id))
           
        }catch(err){
            console.log(err);
            alert(err)
        }
        
    }


    const editHandler = () =>{


        dispatch(editMode(task.id));

    }

    //* tick the task

    return(
 
        !task.isEdit?  <div >
            <Form.Group className='task'>

               {
                task.isDone?  <Form.Check checked  onChange={onCheckHandler} type='checkbox' label={
                    <span className='ticked'
                    onDoubleClick={()=>{ dispatch(editMode(task.id));} }>
                    {task.taskName} 
                </span>
                }/> 
                
                :
                <Form.Check  onChange={onCheckHandler} type='checkbox' label={
                    <span 
                    onDoubleClick={editHandler }>
                    {task.taskName} 
                </span>
                }/> 
                
               

               }
            <Button type='button' onClick={onDelHandler} size='sm'variant='danger'>x</Button>
        
            </Form.Group>
      
    </div>


 : 
    <div>
        <Form onSubmit={onSubmitHandler}>
<Form.Group >
<span className='editMode'><Form.Control value={taskName} type={'text'} onChange={onChangeHandler}  />
    <Button type='submit' variant='success'>Save</Button></span> 
</Form.Group>
    
    </Form>
</div>
    )

   
    

}

export default Task;
