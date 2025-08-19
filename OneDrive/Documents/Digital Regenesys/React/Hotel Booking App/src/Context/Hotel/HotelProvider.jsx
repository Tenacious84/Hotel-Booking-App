import React from 'react'
import HotelContext from './HotelContext.jsx'
import { useState } from 'react'


const sampleHotels = [
  { id: 1, name: 'Grand Palace Hotel', location: 'New York', price: 220 },
  { id: 2, name: 'Oceanview Resort', location: 'Malibu', price: 260 },
  { id: 3, name: 'The Royal Inn', location: 'London', price: 210 },
  { id: 4, name: 'Mountain Escape Lodge', location: 'Aspen', price: 240 },
  { id: 5, name: 'CityLights Hotel', location: 'Tokyo', price: 200 },
  { id: 6, name: 'Sunset Bay Resort', location: 'Phuket', price: 180 },
  { id: 7, name: 'Alpine Comfort Hotel', location: 'Zurich', price: 230 },
  { id: 8, name: 'Blue Horizon Hotel', location: 'Barcelona', price: 190 },
  { id: 9, name: 'Skyline Tower Suites', location: 'Dubai', price: 250 },
  { id: 10, name: 'Green Meadows Inn', location: 'Dublin', price: 170 },
  { id: 11, name: 'The Maple Lodge', location: 'Toronto', price: 200 },
  { id: 12, name: 'Golden Leaf Hotel', location: 'Munich', price: 220 },
  { id: 13, name: 'Palm Grove Resort', location: 'Goa', price: 160 },
  { id: 14, name: 'Urban Nest Hotel', location: 'Seoul', price: 210 },
  { id: 15, name: 'Coral Sands Inn', location: 'Cancun', price: 190 },
  { id: 16, name: 'Lakeview Retreat', location: 'Queenstown', price: 270 },
  { id: 17, name: 'Silver Birch Hotel', location: 'Oslo', price: 200 },
  { id: 18, name: 'Harborfront Hotel', location: 'Cape Town', price: 180 },
  { id: 19, name: 'Snowy Peaks Lodge', location: 'Reykjavik', price: 230 },
  { id: 20, name: 'The Velvet Rose', location: 'Paris', price: 250 },
  { id: 21, name: 'Sapphire Sky Resort', location: 'Bali', price: 170 },
  { id: 22, name: 'The Artisan Inn', location: 'Florence', price: 210 },
  { id: 23, name: 'Cedar Hill Lodge', location: 'Seattle', price: 220 },
  { id: 24, name: 'Riverstone Hotel', location: 'Amsterdam', price: 200 },
  { id: 25, name: 'Waveside Inn', location: 'Gold Coast', price: 190 },
  { id: 26, name: 'Crimson Peak Hotel', location: 'Edinburgh', price: 230 },
  { id: 27, name: 'The Nomads Rest', location: 'Marrakech', price: 180 },
  { id: 28, name: 'Golden Dunes Resort', location: 'Doha', price: 210 },
  { id: 29, name: 'Crescent Bay Hotel', location: 'Nice', price: 200 },
  { id: 30, name: 'Marina Grand Inn', location: 'San Diego', price: 250 },
  { id: 31, name: 'Cloud Nine Suites', location: 'Vancouver', price: 220 },
  { id: 32, name: 'Sundown Villas', location: 'Santorini', price: 240 },
  { id: 33, name: 'Eagle Rock Lodge', location: 'Denver', price: 210 },
  { id: 34, name: 'The Serenity Inn', location: 'Prague', price: 200 },
  { id: 35, name: 'Blue Lagoon Resort', location: 'Malé', price: 230 },
  { id: 36, name: 'The Timberline Hotel', location: 'Banff', price: 220 },
  { id: 37, name: 'Ivory Coast Hotel', location: 'Abidjan', price: 190 },
  { id: 38, name: 'Casa Blanca Retreat', location: 'Lisbon', price: 210 },
  { id: 39, name: 'Nordic Lights Hotel', location: 'Stockholm', price: 220 },
  { id: 40, name: 'Emerald Forest Lodge', location: 'Kigali', price: 170 },
  { id: 41, name: 'Golden Gate Suites', location: 'San Francisco', price: 260 },
  { id: 42, name: 'Twilight Shores Inn', location: 'Auckland', price: 230 },
  { id: 43, name: 'Amber Dunes Hotel', location: 'Dubai', price: 250 },
  { id: 44, name: 'The Whispering Pines', location: 'Whistler', price: 210 },
  { id: 45, name: 'The Lighthouse Inn', location: 'Halifax', price: 190 },
  { id: 46, name: 'Savannah Sands Resort', location: 'Nairobi', price: 180 },
  { id: 47, name: 'Royal Orchid Hotel', location: 'Bangkok', price: 200 },
  { id: 48, name: 'The Traveler’s Haven', location: 'Vienna', price: 220 },
  { id: 49, name: 'La Vida Loca Inn', location: 'Madrid', price: 200 },
  { id: 50, name: 'The Infinity Hotel', location: 'Los Angeles', price: 260 }
];


function HotelProvider({ children }) {
    const [hotels] = useState(sampleHotels)
    const [bookings, setBookings] = useState([])
    

    function bookHotel(hotel, from, to) {
        setBookings([...bookings, { ...hotel, from, to, bookingId: Date.now() }])
    }

    function deleteBooking(bookingId) {
        setBookings(bookings.filter((booking) => booking.bookingId !== bookingId))
    }

    return (
        <div>
            <HotelContext.Provider value={{ bookHotel, deleteBooking, hotels, bookings }}>
                {children}
            </HotelContext.Provider>

        </div>
    )
}

export default HotelProvider