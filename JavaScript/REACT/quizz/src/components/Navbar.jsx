import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <Link to='/'>HOME</Link>
        <Link to='/java'>JAVA</Link>
          <Link to='/pyton'>PYTHON</Link> 
          <Link to='/html'>HTML</Link>
        
        
    </div>
  )
}

// We will not have anchor tag here in react, instead we hv Link