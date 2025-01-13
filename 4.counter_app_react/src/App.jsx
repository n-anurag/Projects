import { useState } from 'react'

import './App.css'

function App() {
const [count,setCount]= useState(0)

const increase_button =()=>{
  setCount(count+1)
}
const decrease=()=>{
  setCount(count-1)
}

  return (
    <>
    <button onClick={increase_button}>Increase by</button>
    <h1><button> {count}</button></h1>
    <button onClick={decrease}>Dercrease by</button>
    </>
  )
}

export default App
