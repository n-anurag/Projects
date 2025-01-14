import React from 'react'
import { useState } from 'react'

const Todoinput = (props) => {
const [inputText,setInputText] =useState([])
console.log(inputText)

  return (
   <>
   <div className="input-container">

    <input type="text"
     placeholder="Enter your todo" className="input-box-todo"
     value={inputText}
     onChange={e=>{
        setInputText(e.target.value)
     }}/>
    
    <button className='add-btn' onClick={()=>{
        props.addList(inputText)
        setInputText("")
    }} >+</button>

   </div>
   </>
     
  )
}

export default Todoinput
