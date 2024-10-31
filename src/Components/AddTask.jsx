import React, {useState} from 'react'

function AddTask({addTask}) {
    // const AddTask= ({addTask})=>{

    const [task, setTask]= useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (task.trim()=== '') return;
        addTask(task);
        setTask('')
    }
  return (
    <div>
      
      <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4">
        <input type='text' placeholder='Add your task' value={task} onChange={(e) =>setTask (e.target.value)} className="w-full p-2 border border-green-950 rounded focus:outline-none focus:ring-1 focus:ring-blue-500" required/>
        <button type='submit'  className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-300" >Add</button>
      </form>
    </div>
  )
}

export default AddTask