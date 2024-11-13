import React from 'react'
import { Link } from 'react-router-dom'

const AdminMenu = () => {
  return (

    <div>
        <h1>admin panel</h1>
      <ol>
        <li><Link to='dashboard/admin/create-category'>create category</Link></li>
        <li><Link to='dashboard/admin/create-products'>create product</Link></li>
        <li><Link to='dashboard/admin/users'>Users</Link></li>
      </ol>
    </div>
  )
}

export default AdminMenu