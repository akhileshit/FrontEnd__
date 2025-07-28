import React from 'react'
import Navbar from '../components/Navbar'

export default function Html() {
  return (
    <div>
        <Navbar />    {/* Added Navbar Component */}
        <h3>HTML Quiz</h3>
        <p>Q1. Input tag is a singleton tag</p>
        <form action="">
            <input type="radio" id='choice1' name='choice' value='true'/> <label for="choice1">True</label>
            <br /><br />
            <input type="radio" id='choice2' name='choice' value='false'/> <label for="choice2">False</label>
            <br /><br />
           
            <input type="submit" />
        </form>
    </div>
  )
}
