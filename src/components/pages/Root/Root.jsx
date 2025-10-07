import React from 'react'
import Navbar from '../../Header/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../Footer/Footer'
import { ToastContainer } from 'react-toastify'

export default function Root() {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  )
}
