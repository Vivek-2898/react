import React from 'react'
import './App.css'
import { addToDo,deleteToDo } from './RTK/Store'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
const App = () =>
{
  const [text, setText] = useState('')
  const dispatch = useDispatch();
  const todos= useSelector((state)=>state.todos)
  const handleAddTodo = () =>
  {
    const newTodo = {
      id: Math.round(Math.random() * 1000),
      text:text
    }
    dispatch(addToDo(newTodo))
  }
  const handleDeleteTodo = (id) =>
  {
    dispatch(deleteToDo(id))
  }
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>
      <div>
        {todos && todos.map((todo) => (
          <div>
            {todo.text} <button onClick={()=>handleDeleteTodo(todo.id)}>Delete</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default App
