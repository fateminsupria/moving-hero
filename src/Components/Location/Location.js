import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from '@material-ui/core';
import Bookings from '../Bookings/Bookings';


const Location = () => {
    const { bedType } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [placeOrder, setPlaceOrder] = useState(false);
    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date()
    });

    const handleCheckInDate = (date) => {
        const newDates = { ...selectedDate };
        newDates.checkIn = date;
        setSelectedDate(newDates);
    };

    const handleCheckOutDate = (date) => {
        const newDates = { ...selectedDate };
        newDates.checkOut = date;
        setSelectedDate(newDates);
    };


    const handleBooking = () => {
        const newBookings = { ...loggedInUser, ...selectedDate };
        fetch('http://localhost:5000/addBookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBookings)
        })
            .then(response => response.json())
            .then(result => {
                setPlaceOrder(true);
                alert('Your Order Place Successfully!!!');
                console.log(result);
            })
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Hello, {loggedInUser.name} Let's car a {bedType} car.</h1>
            <p>Want a <Link to="/home">another car?</Link> </p>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        // variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Check In Date"
                        value={selectedDate.checkIn}
                        onChange={handleCheckInDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />

                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Check Out Date"
                        format="dd/MM/yyyy"
                        value={selectedDate.checkOut}
                        onChange={handleCheckOutDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                <Link style={{textDecoration: 'none'}} to="/thankYou">
                    <Button style={{ height: '40px' }} onClick={handleBooking} variant="contained" color="secondary">
                        Book Now
                    </Button>
                </Link>
            </MuiPickersUtilsProvider>
            {/* <Bookings></Bookings> */}
            <div className="row">
                <div className="col-md-8">
                    <Bookings></Bookings>
                </div>
            </div>
        </div>
    );
};

export default Location;
