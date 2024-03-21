import { useState } from 'react'

import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todo'

function App() {
 

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
