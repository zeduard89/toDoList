import React, {useState} from 'react'
import './Cards.Module.css'

const Card = ({task,toggleTask, removeTask, onClicked =(data)=>{}}) => {

//button check, maneja estado con true o false
//button borrar elimina la card por id
//card recibe un textarea con la info del form


const [taskColors, setTaskColors] = useState({});
//Guardo en newTask el estado anterior(en la primera pasada no existe ninguno) asi que paso al ELSE
// en la segunda pasada Existe asi que entra el If y lo borra, vuelve el RED
const handleClick = (id) => {
  const newTaskColors = { ...taskColors };
  if (newTaskColors[id]) {
    delete newTaskColors[id];
  } else {
    newTaskColors[id] = 'rgba(0, 255, 34, 0.295)';
  }
  setTaskColors(newTaskColors);
};

//Cambio el background por medio de su Style, uso un OR para comenzar con el red ya que al principio no tiene nungun valor background (div ContenedorTarea)
//Usa un onChange para ejecutar la fun onClick (envio card.id)

  return (
    <div className='card' >

      {
      task.map((card)=>{
        return(
          
          <div key={card.id} className='contenedorTarea' style={{ backgroundColor: taskColors[card.id] || 'rgba(255, 17, 0, 0.411)' }} >
          <div className='tareas'>
            <div className='tarea'><input type="checkbox" onClick={(e)=>toggleTask(card.id)} onChange={() => handleClick(card.id)}/> {card.title}</div>            
            <textarea  className='descripcion' style={{backgroundColor:'rgba(255, 17, 0, 0)' }} name="" id="" cols="30" rows="10">{card.text}</textarea>
            {/* <div className='descripcion' >{card.text}</div> */}
          </div>
          <button onClick={(e)=>{removeTask(card.id)}}>
          <div className='botonEliminar' onClick={(e)=>{onClicked(card)}}>
            <div className='EliminarIcono' >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </div>
          </div>
          </button>

          </div>
        )
      })
      }
      
    
    </div>
  )
}

export default Card