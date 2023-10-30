import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* when we are tailwind we have to write the classname instead of class . */}
      <h1 className='bg-green-400 text-black p-4 rounded-lg mb-4'>Tailwind css</h1>
      <Card username="Kunal" btnText="Click me"/>
      <Card username="singh" btnText="Click"/>

    </>
  )
}

export default App
