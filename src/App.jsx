import { useState } from 'react'

import './App.css'

function App() {
 const [formData, setFormData] = React.useState(
  {firstName: "", 
   lastName: ""
}
  )

  function handleChange(event) {
    console.log(event.target.value)
  }

  return (
    <div className="App">
      <form action="" className='test-form'>
        <input 
            type="text" 
            placeholder='First Name'
            onChange={handleChange}
        />
        <input 
            type="text" 
            onChange={handleChange}
            placeholder='Last Name'
        />
      </form>
    </div>
  )
}

export default App
