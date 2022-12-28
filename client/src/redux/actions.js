import ActionTypes from "./types";

export const addTask = (task) =>({type:ActionTypes.ADD_TASK, payload:task});
export const  tickTask = (id) =>({type:ActionTypes.TICK_TASK, payload: id});
export const editMode = (id) =>({type:ActionTypes.EDIT_MODE, payload: id})
export const saveEdit = (id, taskName) =>({type:ActionTypes.SAVE_EDIT, payload: {id, taskName}})
export const deleteTask = (id)=>({type:ActionTypes.DELETE_TASK, payload:id})
