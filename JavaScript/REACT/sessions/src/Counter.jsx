import React, { useState } from 'react'

export default function Counter() {

  // let count = 0;          
  let [count, setCount] = useState(0);  // 'useState(initial_value)' hook & setCount(acts like setter)     only setCount can be used to modify + reflect.

  function increase() {
    // count++        //this just modifies the value @ the backend but won't reflect/visible in frontend(browser)!
    setCount(count+1);  
  }

  function decrease() {
    //count--
    setCount(count-1);
  }

  return (
    <div>
        <h1>Counter: {count}</h1> 
        <div class="buttons">
            <button onClick={increase}>Increment</button>
            <button onClick={decrease}>Decrement</button>
        </div>
    </div>
  )
}


//Using html with js is good in .jsx. But it comes with limitations! [modified values will not be reflected in the browser!!!]. 
// Hence we should make use of "hooks"(like predifined functions) to achieve this. 'usestate()'
// Initial value to the useState() hook is mandatory since based on that only the variables are modified (obviously: dynamically typed).  like for arrays: useState([]), strings: useState('')......

//States allow components to manage their own data internally
//While props allow commucation b/w components by sharing data.

//State is managed inside the component & mutable , props comes from parent component & immutable inside component