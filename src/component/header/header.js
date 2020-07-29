import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className="topnav">
            <NavLink to="/home" exact={true}  >Home</NavLink>
            <NavLink to="/users" >Users</NavLink>
            <NavLink to="/news" >News</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    );
};

export default Header;