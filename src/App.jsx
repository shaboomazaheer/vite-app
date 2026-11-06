import './Style.css'
import Welcome from './components/Welcome'
import Greet from './components/Greet'
import Counter from './components/Counter'

function App() {

  const name = "John"

  return (
    <>
      {/* inline css */}
      <h1 style={{color : "green", backgroundColor : "black", padding:"10px" }}>Hello React</h1>
      <p style={{color:"red"}}>Hi, {name}</p>


      {/* external css */}

      <h2 className="para">I'm learning React Js</h2>
    
    <Welcome/>
    <Greet/>
    <Counter/>

    </>

  )
}

export default App
