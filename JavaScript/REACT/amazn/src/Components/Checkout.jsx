import React, { useState } from 'react'
import Payment from './Payment'

function Checkout(props) {
    const [clicked, setClicked] = useState(false)
    function goToPayment() {
        setClicked(true)
    }
    if (clicked === true)      
        return <Payment price={props.price}/>
  return (
    <div>
        <h3>Welcome to Checkout Component!</h3>
        <h2>Price: {props.price}</h2>
        <button onClick={goToPayment}>Go to Payment</button>
    </div>
  )
}

export default Checkout;



