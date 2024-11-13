import React from 'react'
import Layout from '../../conponents/layout/Layout'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import AdminMenu from '../../conponents/layout/AdminMenu'

const AdminDashboard = () => {
  const [auth] = useAuth()
    return (
      <Layout>
            
    <div className='flex h-full w-full '>
      <div className="w-1/5">
      <AdminMenu/>
      </div>
      <div className="4/5">
      <div className="">

        <h1>admin name :{auth?.user?.name}</h1>
        <h1>admin email :{auth?.user?.email}</h1>
        <h1>admin contact :{auth?.user?.phone}</h1>

      </div>
      </div>
    </div>
      </Layout>
  )
}

export default AdminDashboard