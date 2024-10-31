import React, { useState } from 'react'
import AddTask from './AddTask'

function TaskApp (){
// const TaskApp = ()=> {
    const[tasks, setTasks] = useState([]);

    const addTask = (newTask)=>{
        setTasks ([...tasks, newTask]);
    };
  return (
    <div className="max-w-md mx-auto mt-5">
        <h1 className="text-4xl font-bold text-center mb-4">To-Do List</h1>
        <AddTask addTask={addTask}/>
        <ul>
            {tasks.map((task, index)=>(
                <li key={index} className="p-2 font-bold text-xl">{task}</li>
            ))}
        </ul>
    </div>
  )
}

export default TaskApp