import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  /* when this value gets changed by clicking the button, this whole component of app run again. thats why there is no need of creating other state.*/  
  
  // const [mutlipliedValue, setMultipiledValue] = useState(1)

  /*This could also be achieved without using this state by jsut declaring a normal JS variable. */

  let mutlipliedValue= value*5
  const multiplybyfive=() => {
    // setMultipiledValue(value * 5)
    setValue(value + 1)

  }

  return (
    <>
      <h1>Main Value: {value} </h1>
      <button onClick={multiplybyfive}>Click to multiply by 5</button>
      <h2>Multiplied Value: {mutlipliedValue}</h2>
    </>
  );
}

export default App
