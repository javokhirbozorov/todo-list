import * as React from 'react';
import Task from '../Task/Task'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useDispatch, useSelector } from 'react-redux'



function TaskList() {
    const taskList = useSelector( (store) => store.tasks)

    const dispatch = useDispatch();
    React.useEffect(() =>{
        (async() =>{
                const response = await fetch('http://localhost:3001', {
                    method:'GET',
                    headers:{
                        'Content-Type': 'application/json',
                    }
                })
        
                if(!response.ok)
                throw new Error(
                    `Error: ${response.status} ${response.statusText}`
                )
        
                const data = await response.json();
                if(data.err) throw new Error(data.err);
                dispatch({type:'LOAD_TASKS', payload:data})
    
         } )()
        },[dispatch])
    
    return (
        <div>
            <List>

                {
                    taskList.map((task) => (


                        <ListItem key={task.id}>
                            <Task task={task} />
                        </ListItem>
                    ))
                }

            </List>
        </div>
    );
}

export default TaskList;
