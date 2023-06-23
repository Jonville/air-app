import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
      <nav className='navbar'>
        <Link className='navHome' to='/'>Home</Link>
        {/* <Link className='navDetail' to='/detail'>Detail</Link> */}
      </nav>
    )
}

export default Nav