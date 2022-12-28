import React, {useState} from 'react';
import {Button, Box, TextField} from "@mui/material";
import './styles/AddTask.css'
import {useDispatch} from "react-redux";
import {addTask} from "../../redux/actions";

function AddTask() {

    const dispatch = useDispatch();
    const [task, setTask] = useState({taskName:'', isDone:false, isEdit:false})
    const onChangeHandler =(event)=>{
    setTask({ taskName:event.target.value,  isDone: false,isEdit: false})
    }

    const onSubmitHandler = async (event) =>{
  

    try{
        event.preventDefault();
        console.log(task);
        if(!task.taskName) return alert('Type words');


        const response = await fetch("http://localhost:3001", {

            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
          });


      
          if (!response.ok)
          throw new Error(
            `Failed to add: ${response.statusText} ${response.status}`
          );

          const data  = await response.json();
          if(data.err) throw new Error(data.err);

          dispatch(addTask(data))
        setTask({taskName: ''})
    }catch(err){
        console.log(err);
        alert(err.message);
    }

    // const todo = {...task}
    
   
   
    }
    return (
        <div>

                <form className='add-task-form' onSubmit={onSubmitHandler}>
                    <Box className={'inputBox'}>
                    <TextField value={task.taskName} type={"text"} onChange={onChangeHandler} sx={{margin:'10px'}}/>
                    <Button sx={{marginTop:'10px', height:'55px'}} color={"primary"} type={"submit"} variant="contained">Add</Button>
                    </Box>
                </form>
        </div>
    );
}

export default AddTask;
