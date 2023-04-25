import React,{useState} from 'react'
import './Form.Module.css'

const Form = () => {

const [input,setInput]= useState({
    title:'',
    text:''

});

let [task,setTask]= useState([''])

const handleOnChange=(event)=>{
    setInput({
        ...input,
        [event.target.name]: event.target.value
        
    })
}

const handleSubmit = (e) => {
  e.preventDefault();
}

const handleOnClick=()=>{
  setTask(
    task= [...task,input]
  )
}


console.log(task);
  return (
    <form className='cont' onSubmit ={handleSubmit}>
      <input className='task' name='title'type="text" onChange={handleOnChange} value={input.title} placeholder=' New Task' />
      <input className='description' name='text'type="text" onChange={handleOnChange} value={input.text} placeholder=' Description' />
      <button className='button' onClick={handleOnClick}>ADD</button>
    </form>
  )
}


export default Form