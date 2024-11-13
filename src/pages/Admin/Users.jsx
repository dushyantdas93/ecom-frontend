import React from 'react'
import Layout from '../../conponents/layout/Layout'
import AdminMenu from '../../conponents/layout/AdminMenu'

const Users = () => {
  return (
    <Layout>
    <div className='flex h-full w-full '>
  <div className="w-1/5">
  <AdminMenu/>
  </div>
  <div className="4/5">
  <div className="">

  users

  </div>
  </div>
</div>
</Layout>
  )
}

export default Users