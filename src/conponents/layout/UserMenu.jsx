import React from 'react'
import { Link } from 'react-router-dom'

const UserMenu = () => {
  return (

    <div>
        <h1>User panel</h1>
      <ol>
        <li><Link to='/dashboard/profile'>profile</Link></li>
        <li><Link to='/dashboard/orders'>orders</Link></li>
        {/* <li><Link to='dashboard/users'>Users</Link></li> */}
      </ol>
    </div>
  )
}

export default UserMenu