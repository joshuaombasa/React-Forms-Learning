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
      isGraduated: true,
      employed: '',
      favEmployer: ''

    }
  )

  console.log(formData.favEmployer)

  function handleChange(event) {
    const {name, type, value, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
    
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
           checked={formData.isGraduated}
           id='isGraduated'
           onChange={handleChange}
           name='isGraduated'
           /> 
           <label htmlFor="isGraduated">Graduated ?</label> 

        <fieldset>
          <legend>Career field:</legend>
          <input 
          type="radio" 
          name="employed" 
          id="site-reliability-engineer" 
          value='site-reliability-engineer'
          checked={formData.employed === 'site-reliability-engineer'}
          onChange={handleChange}
          />
          <label htmlFor="site-reliability-engineer">Site Realiability Engineer</label>
          <input 
          type="radio" 
          name="employed" 
          id="site-reliability-engineer" 
          checked={formData.employed === 'mpesa-engineer'}
          value='mpesa-engineer'
          onChange={handleChange}
          />
          <label htmlFor="mpesa-engineer">MPESA Engineer</label>
          <input 
          type="radio" 
          name="employed" 
          id="site-reliability-engineer" 
          checked={formData.employed === 'rnap-engineer'}
          value='rnap-engineer'
          onChange={handleChange}
          />
          <label htmlFor="rnap-engineer">RNAP Engineer</label>
        </fieldset>
        <label htmlFor="favourite-employer">Choose favourite employer in Kenya</label>
        <select 
        id="favourite-employer" 
        className='favourite-employer'
        value={formData.favEmployer}
        name='favEmployer'
        onChange={handleChange}
        >
          <option value="">---choose---</option>
          <option value="Safaricom">Safaricom</option>
          <option value="Kenya Revenue Authority">Kenya Revenue Authority</option>
          <option value="Kenya Commercial Bank">Kenya Commercial Bank</option>
          <option value="Jubilee Insurance">Jubilee Insurance</option>
          <option value="Andela">Andela</option>
        </select>
      </form>
    </div>
  )
}

export default App
