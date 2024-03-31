
import React from "react"
import { useState, useEffect } from 'react'
import TodoForm from "./components/TodoForm"
import { TodoItem } from "./components/TodoItem"
import { TodoProvider } from "./contexts/TodoContext"

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, {
      id: Date.now(),
      todo,
      completed: false
    }
    ])
  }

  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id)
    }
    )
  }


  // const updateTodo = (id, todo) => {
  //   setTodos((prev) =>
  //   (prev.map((p) => 
  //     p.id===id ? {...p,todo,id:Date.now()}:p
  //   ))
  //   )
  // }

  const updateTodo = (id,todo ) => 
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo,todo}: prevTodo )))


  const toggleComplete = (id) => {
    setTodos(
      (prev) => {
        return prev.map(
          (p) => p.id === id ? { ...p, completed: !p.completed } : p
        )
      }
    )
  }



  // jab bhi reload karege to local storage se data lene ke liye

  useEffect(() => {
    const prevTodos = JSON.parse(localStorage.getItem("todos"))

    if (prevTodos && prevTodos.length > 0)
      setTodos(prevTodos)
  }, []
  )

  // jab bhi todos change hoga to local storage me update karne k liye

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]
  )


  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="w-full min-h-screen bg-gray-500 flex justify-center">
        <div className="  text-center w-full max-w-2xl">
          <h1 className="font-bold text-2xl text-white p-4">Manage Your Todos</h1>
          <div className="">
            <TodoForm />
          </div>
          <div className="">
            {
              todos.map((t) => (<div key={t.id} className="">
                <TodoItem todo={t} />

              </div>
              ))
            }
          </div>
        </div>
      </div>


    </TodoProvider>
  )
}

export default App
