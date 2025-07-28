import React, {useState} from 'react'
import { updateWallet } from '../store';
import {useSelector, useDispatch} from 'react-redux'

// export default function Payment(props) {
//   return (
//     <div>
//         <h3>Welcome to Payment Component!</h3>
//         <h2>Price: {props.price}</h2>
//     </div>
//   )
// }


export default function Payment() {
  const [clicked, setClicked] = useState(false)
  // need 2 extra hooks
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  function handleOnClick() {
    setClicked(true) // here the react reloads the project since the value of a variable changed!!
    dispatch(updateWallet(1000))
  }
  // console.log("Hello")
  if (clicked) {
    return (
      <>
        {/* <Payment /> */}
        <h4>Updated Wallet: {user.wallet}</h4>
      </>
    )
  }
  return (
    <div>
        <h3>Welcome to Payment Component!</h3>
        <h2>Initial wallet: {user.wallet } </h2>
        <button onClick={handleOnClick}>PAY 1000</button>
    </div>
  )
}


