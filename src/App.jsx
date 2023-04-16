import { useState } from 'react'
import React from 'react'

import './App.css'

function App() {
  const [formData, setFormData] = React.useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      isGraduated: true

    }
  )

  function handleChange(event) {
    const {name, type, value, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: event.target.value
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
        <input
          type="email"
          onChange={handleChange}
          placeholder='Email'
          value={FormData.email}
          name="email"
        />
        <textarea
          name="comments"
          onChange={handleChange}
          placeholder='Comments...'
          value={FormData.comments}
          cols="30"
          rows="10" />
        <input 
           type="checkbox" 
           value={formData.isGraduated}
           id='isGraduated'
           /> 
           <label htmlFor="isGraduated">Graduated ?</label> 

        {/* <fieldset>
          <legend>Career field:</legend>

          <input 
          type="radio" 
          name="" 
          id="site-reliability-engineer" />
          <label htmlFor="site-reliability-engineer">Site Realiability Engineer</label>
        </fieldset> */}
      </form>
    </div>
  )
}

export default App
