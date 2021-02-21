import React from 'react';
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import StorefrontIcon from '@material-ui/icons/Storefront';

function Navbar() {
    return (
        <div className="navbar">
            <span><img className="navbar_logo" src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=49" alt="" srcSet=""/></span>
            <span>Home</span>
            <span>TV Shows</span>
            <span>Movies</span>
            <span>Latest</span>
            <span>My List</span>
            <span>KIDS</span>
            <span className='icons'><SearchIcon/></span>
            <span className='icons'><NotificationsIcon/></span>
            <span className='icons'><StorefrontIcon/></span>
        </div>
    )
}


export default Navbar
