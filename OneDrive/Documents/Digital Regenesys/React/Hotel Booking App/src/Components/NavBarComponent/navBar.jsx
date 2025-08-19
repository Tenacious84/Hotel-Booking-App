import React from "react";
import "./navBar.css"
import { Link } from 'react-router-dom'



const NavBar = () => {

    return (
        <div className="navContainer">
            <Link to='/' > Home</Link>
            <Link to='/Listings' > Listings</Link>
            <Link to='/Bookings'>Bookings </Link>
            <Link to='/Contact'>Contact </Link>
        </div>
    )
}

export default NavBar