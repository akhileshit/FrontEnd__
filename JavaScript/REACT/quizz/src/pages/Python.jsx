import React from 'react'
import Navbar from '../components/Navbar'

export default function Python() {
  return (
    <div>
        <Navbar />
        <h3>Python Quiz</h3>
        <p>Q1. print(5/2)?</p>
        <form action="">
            <input type="radio" id='choice1' name='choice' value='2'/> <label for="choice1">2</label>
            <br /><br />
            <input type="radio" id='choice2' name='choice' value='52'/> <label for="choice2">52</label>
            <br /><br />
            <input type="radio" id='choice3' name='choice' value='2.5'/> <label for="choice3">2.5</label>
            <br /><br />
            <input type="radio" id='choice4' name='choice' value='2.0'/> <label for="choice4">2.0</label>
            <br /><br />
            <input type="submit" />
        </form>
    </div>
  )
}