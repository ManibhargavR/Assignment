import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RentalHome from './Assignment'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <RentalHome/>
   </div>
  )
}

export default App
