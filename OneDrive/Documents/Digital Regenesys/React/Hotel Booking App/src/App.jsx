import { useState, useEffect, useContext } from 'react'
import './App.css'
import NavBar from './Components/NavBarComponent/navBar.jsx'
import Home from './Pages/Home/home.jsx'
import Listings from './Pages/Listings/Listings.jsx'
import Bookings from './Pages/Bookings/Bookings.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import { Routes, Route } from 'react-router-dom'



function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Listings' element={<Listings />}></Route>
        <Route path='/Bookings' element={<Bookings />}></Route>
        <Route path='/Contact' element={<Contact />}> </Route>

      </Routes>
    </>
  )
}

export default App
