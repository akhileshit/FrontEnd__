import React from 'react'
import Navbar from '../components/Navbar'

export default function Java() {
  return (
    <div>
        <Navbar />    {/* Added Navbar Component */}
        <h3>Java Quiz</h3>
        <p>Q1. Size of int data type?</p>
        <form action="">
            <input type="radio" id='choice1' name='choice' value='2B'/> <label for="choice1">2 Bytes</label>
            <br /><br />
            <input type="radio" id='choice2' name='choice' value='4B'/> <label for="choice2">4 Bytes</label>
            <br /><br />
            <input type="radio" id='choice3' name='choice' value='8B'/> <label for="choice3">8 Bytes</label>
            <br /><br />
            <input type="radio" id='choice4' name='choice' value='16B'/> <label for="choice4">16 Bytes</label>
            <br /><br />
            <input type="submit" />
        </form>
    </div>
  )
}


// same names shd be there for radio buttons 
// id's given to specify in 'for' attribute
// 'name' and 'value' attributes for request-string
// These are basics in Html....