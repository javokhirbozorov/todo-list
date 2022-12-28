import React from 'react';
import Header from "../../components/Header/Header";
import AddTask from "../../components/AddTask/AddTask";
import {Box} from "@mui/material";
import TaskList from "../../components/TaskList/TaskList";

export const Home = () =>{
    return(
        <>
        <Header title={"TO-DO"}/>
            <Box sx={{
                margin:'auto',
                width:'80%',
                minHeight:'30vh',
                // marginTop:'30%',
                borderRadius:'20px',
                backgroundColor:'white',
                paddingTop:'15px',
                paddingBottom:'15px'
            }}>
            <AddTask/>
                <TaskList/>
            </Box>
        </>
    )
}
