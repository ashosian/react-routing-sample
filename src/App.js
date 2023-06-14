import React from 'react'
import { Route, Routes } from 'react-router'
import Homes from './Pages/Homes'
import RootLayout from './Components/RootLayout'
import About from './Pages/About'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Homes />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
