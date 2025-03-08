import { useState } from 'react'
import './App.css'
import Quote from '../Quote/Quote'

function App() {
  
  return (
    <>
      <div className='header-contatiner'>
        <h1>The Red Book</h1>
      </div>

      <div className='quote-container'>
        <Quote />
      </div>
    </>
  )
}

export default App
