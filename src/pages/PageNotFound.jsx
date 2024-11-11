import React from 'react'
import Layout from '../conponents/layout/Layout';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <Layout title="ecom-2024 - page not found">
      <div className='h-[600px] flex items-center justify-center flex-col'>
        <h1 className='text-8xl'>404</h1>
        <h2 className='text-4xl'>page not found</h2>
       <Link to="/" className='underline hover:no-underline'>Go Back</Link>
      </div>
    </Layout>
  );
}

export default PageNotFound