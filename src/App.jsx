import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <form action="" className='test-form'>
        <input 
            type="text" 
            placeholder='First Name'
        />
        <input 
            type="text" 
            placeholder='Last Name'
        />
      </form>
    </div>
  )
}

export default App
