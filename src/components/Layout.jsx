import React, { Fragment } from 'react'
import { Footer, Navbar } from './'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout