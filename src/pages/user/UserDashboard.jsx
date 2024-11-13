import React from 'react'
import Layout from '../../conponents/layout/Layout'
import UserMenu from '../../conponents/layout/UserMenu'

const Dashboard = () => {
    return (
      <Layout title="Dashbaord - ecom-2024">
            
    <div className='flex h-full w-full'>
      <div className="w-1/5">
        <UserMenu/>
      </div>
      <div className="w-4/5"></div>
    </div>
      </Layout>
  )
}

export default Dashboard