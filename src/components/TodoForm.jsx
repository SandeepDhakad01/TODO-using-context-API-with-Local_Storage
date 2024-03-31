import React from 'react'
import {useState} from 'react'
import { useTodo } from '../contexts/TodoContext';

 function TodoForm () {
    const [newTodo,setNewTodo]=useState("");
   
      const {todos,addTodo}=useTodo()

    const handleSubmit=(e)=>{
        e.preventDefault();
          console.log("new msg=>",newTodo)
        if(!newTodo) return 
        addTodo(newTodo)
        setNewTodo("")
        console.log("chala h")
        console.log(todos.length)
    }
  return (
    <form onSubmit={handleSubmit} 
    className='bg-slate-600 rounded-xl flex justify-between overflow-hidden'>
        <input type="text" placeholder='Write Todo...'
        value={newTodo}
        onChange={(e)=>setNewTodo(e.target.value)}

         className='py-4 w-full px-2 outline-none 
         bg-slate-600 text-white '
         />
        <button type='submit' 
        className='bg-green-600  px-3 rounded text-white  '>Add</button>
    </form>
  )
}

export default TodoForm;