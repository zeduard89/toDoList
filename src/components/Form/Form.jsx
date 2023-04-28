import React,{useState} from 'react'
import './Form.Module.css'
import Cards from '../Cards/Cards';

const Form = () => {

const [input,setInput]= useState({
    id:'',
    title:'',
    text:'',
    completed:'false'

});

let [task,setTask]= useState([{id:1,title:'title',text:'text'}])



// Resetea el Formulario de Ingreso de Tarea
const resetInput = () => {
  setInput({ title:'', text:'' });
};


const handleSubmit = (e) => {
  e.preventDefault();
  resetInput()
}


const handleOnChange=(event)=>{
    setInput({
        ...input,
        [event.target.name]: event.target.value
        
    })
}

const removeTask = (id) => {
    const newState = task.filter((tarea) => tarea.id !== id);
    setTask(newState);
  };

  const toggleTask = (id) => {
    const draft = structuredClone(task);
    const tarea = draft.find((tarea) => tarea.id === id);
    tarea.completed = !tarea.completed;
    setTask(draft);
  };


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
    <Cards 
    key={task.id}
    task={task}
    removeTask={removeTask}
    toggleTask={toggleTask}
    />

    <form className='cont' onSubmit ={handleSubmit}>
      <input className='task' name='title'type="text" onChange={handleOnChange} value={input.title} placeholder=' New Task' />
      <input className='description' name='text'type="text" onChange={handleOnChange} value={input.text} placeholder=' Description' />
      <button className='button' onClick={handleOnClick}>ADD</button>
    </form>
    </>
  )
}


export default Form