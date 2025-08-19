import { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './Listings.css'
import HotelContext from '../../Context/Hotel/HotelContext.jsx';

function Listings() {

  const [searchParams] = useSearchParams();
  const { hotels, bookHotel } = useContext(HotelContext);
  const [filterHotels, setFilterHotels] = useState([]);
  const [bookModal, setModal] = useState(false);
  const [bookingInfo, setInfo] = useState({});
 
  const location = searchParams.get('location') || ''
  const from = searchParams.get('from') || ''
  const to = searchParams.get('to') || ''

   const [fromDate, setFromDate] = useState(from);
  const [toDate, setToDate] = useState(to)

  useEffect(() => {

    console.log(hotels)
    // const newHotels = localStorage.getItem('hotels', hotels) || '';
    // localStorage.setItem('hotels', JSON.stringify(hotels))
    // console.log(JSON.parse(newHotels))
    // const sampleHotels = JSON.parse(newHotels)

    const filtered = hotels.filter((hotel) => {

      return hotel.location.toLowerCase().includes(location.toLowerCase())
    })
    console.log(filtered)
    setFilterHotels(filtered)

  }, [hotels, searchParams])

  function handlePreBooking(hotel) {
    setModal(true)
    setInfo(hotel)

  }

  function handleCloseModal() {
    setModal(false)
    setInfo({})
  }
  function handleConfirmation() {
    setBookings(bookingInfo, fromDate, toDate)
    console.log(fromDate, toDate  )
  }


  return (
    <div>
      {
        bookModal ? (
          <div className="modal">
            <div className="closeModal" onClick={() => handleCloseModal()}>×</div>

            <h1>{bookingInfo.name}</h1>
            <h3>{bookingInfo.location}</h3>
            <h2>${bookingInfo.price}</h2><br />
            <div><label >From:</label></div>
            <input type="date" value={from} />
            <div className='toDiv'><label >To:</label></div>
            <input type="date" value={to} />

            <button className='confirmBooking' onClick={(e) => handleConfirmation} onChange={(e)=>{e.target.value}} >Confirm Booking</button>
          </div>
        ) : null
      }
      <h1 className='heading'>Vacation</h1>
      <div className='cards'>
        {filterHotels.map((e, idx) => (
          <div className="hotelCard" id='idx' key={idx}>
            <h1>{e.name}</h1>
            <h3>{e.location}</h3>
            <h2>${e.price}</h2><br />
            <button className='BookNow' onClick={() => handlePreBooking(e)}> Book now!</button>
          </div>
        ))}

      </div>


    </div>
  )
}

export default Listings