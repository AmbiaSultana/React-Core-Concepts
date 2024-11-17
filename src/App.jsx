
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import User from './User'

function App() {
  
  const handleClick = () => {
    alert('Function alert!!!')
  }

  function handleClick1(){
    alert('Funtion alert done!!')
  }

  const addToFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
    
    <h2>React Core concepts 2</h2>
    <Friends></Friends>
    <User></User>
   <Counter></Counter>
    <button onClick={handleClick}>First button</button>
    <button onClick={handleClick1}>Second Button</button>
    <button onClick={() => alert('Alert alert!!!')}>Third Button</button>
    {/* <button onClick={() => addToFive(9)}>Fourth Button</button> */}
    <button onClick={() => addToFive(12)}> 4 button</button>
    <button onClick={function handleClick(){alert ('Alert Quick')}}>5 button</button>
    </>
  )
}

export default App
