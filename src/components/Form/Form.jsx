import React,{useState} from 'react'
import './Form.Module.css'
import Cards from '../Cards/Cards';

const Form = () => {

const [input,setInput]= useState({
    title:'',
    text:''

});

let [task,setTask]= useState([{id:1,title:'title',text:'text'}])

const handleOnChange=(event)=>{
    setInput({
        ...input,
        [event.target.name]: event.target.value
        
    })
}

const handleSubmit = (e) => {
  e.preventDefault();
}

//Correcion del formato para que toma un id cada vez que llame

const handleOnClick=()=>{
  setTask(
    task = [...task,{
    id:Date(),
    title:input.title,
    text:input.text}
    ])
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