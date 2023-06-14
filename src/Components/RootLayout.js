import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

const RootLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default RootLayout
