import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CCPerson from './ClassComps/CCPerson'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <CCPerson/>
    </div>
  )
}

export default App
