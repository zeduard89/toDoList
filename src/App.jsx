import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import Form from './components/Form/Form'



function App() {

  return (

    
      <div className="App">
        <Nav/>
        <div className='body'>
          <h1>TASKS</h1>
          {/* <Cards/> */}
          <Form/>          
        </div>
      </div>
    
    
  )
}

export default App
