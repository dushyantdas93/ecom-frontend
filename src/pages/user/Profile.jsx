import React from 'react'
import UserMenu from '../../conponents/layout/UserMenu'
import Layout from '../../conponents/layout/Layout'
import { useAuth } from '../../context/auth'

const Profile = () => {
    const [auth] = useAuth()
  return (
    <Layout title="Dashbaord - ecom-2024">
            
            <div className='flex h-full w-full'>
            <div className="w-1/5">
        <UserMenu/>
      </div>
      <div className="w-4/5">
        <h1>your name : {auth?.user?.name}</h1>
        <h1>your email : {auth?.user?.email}</h1>
        <h1>your contact : {auth?.user?.phone}</h1>
      </div>
    </div>
      </Layout>
  )
}

export default Profile