import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Otp } from './Components/Otp/Otp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className=" font-bold underline">
      Hello world!
      <Otp/>
    </h1>
    </>
  )
}

export default App
