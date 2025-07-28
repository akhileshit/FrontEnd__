import React, { useState } from 'react'
import Checkout from './Checkout'

export default function Cart(props) {
    const [clicked, setClicked] = useState(false)

    function gotoCheckout() {
        setClicked(true)
    }
    if (clicked === true) {
       return <Checkout price={props.price} />
    }
  return (
    <div>
        <h3>Welcome to Cart Component</h3>
        <h2>Price: {props.price}</h2>
        <button onClick={gotoCheckout}>Go to Checkout</button>
    </div>
  )
}
