import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './countar'
import Team from './team'
import Users from './Users'
import Friends from './Friends'

function App() {
  return (
    <>
      <h3>React Core Concepts</h3>
      <Friends></Friends>
      <Users></Users>

      <Team></Team>
      <Counter></Counter>
     
    </>
  )
   
}

export default App
