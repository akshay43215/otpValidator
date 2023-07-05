import { useState } from 'react'
import './App.css'
import { Otp } from './Components/Otp/Otp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <h2 className='font-bold space-x-2'>Otp Validator</h2>
      <Otp/>
    </div>
  )
}

export default App
