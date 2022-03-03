import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Children } from 'react/cjs/react.production.min'

const Layout = ({ Children }) => {
  return (
    <>
    <Navbar />
     {Children }
    <Footer />
    </>
  )
}

export default Layout