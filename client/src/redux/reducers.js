

import ActionTypes from './types'






const initialState = {
  
    tasks:[
        
    ]

}
console.log(initialState);

export const reducers = (state = initialState, action) =>{
    switch (action.type){
        case ActionTypes.ADD_TASK:
            const task = action.payload;
            return {...state, tasks:[...state.tasks, {...task}]}

         case ActionTypes.LOAD_TASKS:
            const data = action.payload;
            console.log(data, "hello data");
            return {...state, tasks:data}

        case ActionTypes.TICK_TASK:
        const idToTick = action.payload;
        const tick = state.tasks.map((task)=>{
            if(task.id === idToTick) return {...task, isDone:!task.isDone}
            return task;
        })
        return{...state, tasks:tick}

        case ActionTypes.EDIT_MODE:
            const id = action.payload;
            const editTasks = state.tasks.map((task) =>{
                if(task.id === id) return {...task, isEdit:!task.isEdit};
                
                return task;
            });
            console.log(editTasks);
            return {...state, tasks: editTasks}

        case ActionTypes.SAVE_EDIT:
            const idToSave = action.payload.id;
            const taskName = action.payload.taskName;
            const saveEdit = state.tasks.map((task)=>{
                if(task.id === idToSave) return {...task, taskName:taskName, isEdit:false};
                return task;
            })
            return {...state, tasks:saveEdit}


        case ActionTypes.DELETE_TASK:
            const idToDelete = action.payload;
            const delEdit = state.tasks.filter((task) =>task.id !== idToDelete)
            return {...state, tasks:delEdit}
        default:
            return initialState
    };
}
