import React,{useState} from 'react'
import './Form.Module.css'
import Cards from '../Cards/Cards';

const Form = () => {

const [input,setInput]= useState({
    id: new Date().getTime(),
    title:'',
    text:''

});

let [task,setTask]= useState([{title:'Tarea 1', text: 'Arrancar con la tarea 1.'}])

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
    <>
    <Cards task={task}/>

    <form className='cont' onSubmit ={handleSubmit}>
      <input className='task' name='title'type="text" onChange={handleOnChange} value={input.title} placeholder=' New Task' />
      <input className='description' name='text'type="text" onChange={handleOnChange} value={input.text} placeholder=' Description' />
      <button className='button' onClick={handleOnClick}>ADD</button>
    </form>
    </>
  )
}


export default Form