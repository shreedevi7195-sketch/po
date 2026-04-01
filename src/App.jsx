import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PortFolio from './components/PortFolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1 className="text-red-500 text-3xl"> Tailwind is Working</h1> */}
   <PortFolio/>
    </>
  )
}

export default App
