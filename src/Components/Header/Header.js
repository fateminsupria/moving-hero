import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Moving-hero.png';
import './Header.css';
import header from '../../images/Bg.png';
const Header = () => {
    return (
            <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
                <nav className="nav">
                    <ul>
                        <li>
                            <img className="logo" src={logo} alt=""/>
                        </li>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/destination">Destination</Link>
                        </li>
                        <li>
                            <Link className="btn-book" to="/Home">Back Home</Link>
                        </li>
                    </ul>
                </nav>
                <div className="title-container">
                    <h2>A Ride Sharing App</h2>
                </div>
            </div>
        );
    };

export default Header;