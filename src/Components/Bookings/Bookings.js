import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Bookings = () => {
    const [loggedInUser ] = useContext(UserContext); 
    // setLoggedInUser
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookings?email='+loggedInUser.email, {
            method: 'GET',
            headers : { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then( data => setBookings(data))
    }, )
    // []
    return (
        <div>
            <h3>You Have {bookings.length} bookings</h3>
            {
                bookings.map(booking => 
                <li key={booking._id}>{booking.name} From {new Date(booking.checkIn).toDateString('dd/MM/yyyy')} To {new Date(booking.checkOut).toDateString('dd/MM/yyyy')}</li>)
            }
        </div>
    );
};

export default Bookings;