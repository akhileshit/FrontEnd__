import React from 'react'
import Counter from './Counter'

export default function Classes(props) {  //A component
  return (
    <div>
        {/* <h2>Session:</h2> {props.session}
        <h2>Mentor:</h2> {props.mentor} */}
        <Counter />
    </div>
  )
}


//.jsx (JavaScript XML) is same as .js but with some additional features
// type.. 'rfc' for auto-template                 [2 types basically : rfc(react functional component)[widely-used] & rcc(react class component)]
//in .jsx we can combine both html with js(using curly braces)! [it's like using html inside .js file!]

//"props"
// props are the 'properties used while calling a component' (<Classes prop1="" prop2="" />)
// MORe precisely, used to pass data from 1 component to another.
// they are read-only, once called by a parent component using some values. I mean they say they are 'immutable'


//RFC - 
//RCC -


// export can also be written while defining function like here.