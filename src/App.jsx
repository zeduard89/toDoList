import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'

function App() {


  return (
    <div className="App">

      <Nav/>
      <body className='body'>

        <h1>Title</h1>
        
        {/* Input  newTask, maneja estado para obtener info, enviarla a Card */}
        <form action="">form</form>

        {/* recibe task={task} de form */}
        <Cards/>

      </body>
      

    </div>
  )
}

export default App
