import React from 'react'
import "./Home.css"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



function Home() {

    const navigate = useNavigate()
    const [location, setLocation] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    const handleSearch = () => {
        console.log('Checking', location, from, to)
        navigate(`/Listings?location=${location} &from=${from} &to=${to}`)
    }


    return (
        <div className='HomeContainer'>
            {/* <p>Book your holiday getaway!</p> */}
            <div className="infoContainer">

                <div className="location">
                    <div><label>Location:</label></div>
                    <div><input type="text" placeholder='Type your location...' value={location} onChange={(e) => setLocation(e.target.value)} /></div>
                </div>

                <div className="from">
                    <div> <label>From: </label></div>
                    <div> <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} /></div>
                </div>

                <div>  <div className="to"> <label>To:</label></div>
                    <div><input type="date" value={to} onChange={(e) => setTo(e.target.value)} /></div>
                </div>

            </div>

            <div className="search">
                <button onClick={handleSearch}> SEARCH</button>
            </div>

        </div>
    )
}

export default Home