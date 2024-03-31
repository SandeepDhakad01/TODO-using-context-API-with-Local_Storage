import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'



export const TodoItem = (p) => {
 const todo=p.todo;
  const [todoMsg,setTodoMsg]=useState(todo.todo);
  const [isEditable,setIsEditable]=useState(false)


  const {deleteTodo,updateTodo,toggleComplete}=useTodo()


  const handleComplete=()=>{
     toggleComplete(todo.id)
  }


  return (
    <div
     className={`w-full rounded-xl py-1.5 my-3 mt-4 flex   ${todo.completed===true ? "bg-green-200" : "bg-slate-300" }`}
    >

      <input type="checkbox" 
            checked={todo.completed}
            onChange={handleComplete}
            className='m-2'
      />

      <input type="text"
      value={todoMsg}
      onChange={(e)=>{setTodoMsg(e.target.value)}}
      readOnly={!isEditable}
     
        className={`outline-none  w-full text-lg font-semibold bg-transparent border-2
         ${todo.completed ? "line-through": "" } 
        ${ isEditable ? "border-black/10 px-2" :"border-transparent"}`} 
      />

      <button onClick={
        ()=>{
          if(todo.completed) return ;
          if(isEditable){
            updateTodo(todo.id,todoMsg)
          }
            setIsEditable((prev)=>!prev)
        }
      }
      
      className='mx-1 p-2  bg-gray-50 hover:bg-gray-200 rounded-md'
      >{isEditable? "📁" : "✏️"}</button>
      <button onClick={
        ()=>{ deleteTodo(todo.id)}
      }
      className='mx-1.5 p-2  bg-gray-50 hover:bg-gray-200 rounded-md'
      >❌</button>
    </div>
  )
}
