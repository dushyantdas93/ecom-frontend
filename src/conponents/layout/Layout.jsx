import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
      <>
          <Header />
          <main>{children}</main>
          {/* <h1>fdsf</h1> */}
          <Footer/> 
      </>
  )
}

export default Layout