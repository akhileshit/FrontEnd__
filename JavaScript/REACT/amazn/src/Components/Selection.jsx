import React, { useState } from 'react'
import Cart from './Cart';

export default function Selection(props) {
    const [clicked, setClicked] = useState(false)     
    
    function gotoCart() {
        setClicked(true)             // i thought 'setClicked = true' would work..  It wont..becaz setClicked is not variable returned, instead it's a function returned by react's useState!!. So using this way [updates the clicked variable + re-renders the component ]
    }
    if (clicked === true) {           // ..then this wouldn't work!!.  By the way iam surprised how this got executed when the button is clicked?  answer below
        return <Cart price={props.price} />
    }
  return (
    <div>
        <h3>Welcome to Selection Component!</h3>
        <h2>Price: {props.price}</h2>
        <button onClick={gotoCart}>Go to cart</button>
    </div>
  )
}


// if-statement was not executed on button click, rather the whole checkout component got "re-rendered" when the state "clicked" changed...