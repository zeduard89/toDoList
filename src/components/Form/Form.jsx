import React,{useState} from 'react'


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


const handleOnClick=()=>{
  setTask(
    task= [...task,input]
  )
}


console.log(task);
  return (
    <div>
    <input name='title'type="text" onChange={handleOnChange} value={input.title} />
    <input name='text'type="text" onChange={handleOnChange} value={input.text} />
    <button onClick={handleOnClick}>Botton</button>
    </div>
  )
}


export default Form