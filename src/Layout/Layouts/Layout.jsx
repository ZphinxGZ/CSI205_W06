import React from 'react'
import { Outlet } from 'react-router'

import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import './Layout.css'

function Layout({ tab, setTab }) {
  return (
    <div>
      <Header />
      <Navbar tab={tab} setTab={setTab}/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
