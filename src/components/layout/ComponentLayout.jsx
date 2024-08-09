import React from 'react'
import Navbar from '../home/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../home/Footer/Footer'

const ComponentLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default ComponentLayout
