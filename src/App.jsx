import { useState } from 'react'
import React from 'react'

import './App.css'

function App() {
 const [formData, setFormData] = React.useState(
  {firstName: "", 
   lastName: ""
}
  )

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    }) 
    console.log(formData)
  }

  return (
    <div className="App">
      <form action="" className='test-form'>
        <input 
            type="text" 
            placeholder='First Name'
            onChange={handleChange}
            value={formData.firstName}
            name="firstName"
        />
        <input 
            type="text" 
            onChange={handleChange}
            placeholder='Last Name'
            value={FormData.lastName}
            name="lastName"
        />
      </form>
    </div>
  )
}

export default App
