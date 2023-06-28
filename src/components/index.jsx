import React from 'react'
import AddToDo from './AddToDo'
import ToDoList from './ToDoList'

export default function ToDoApp() {
  return (
    <div className='container' style={{ textAlign: 'center', marginTop: '10px' }}>
      <h1>TO DO List</h1>
      <AddToDo />
      <ToDoList />
    </div>
  )
}
