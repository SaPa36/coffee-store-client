import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='space-x-4'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add-coffee">Add Coffee</NavLink>
            <NavLink to="/sign-up">Sign Up</NavLink>
            <NavLink to="/sign-in">Sign In</NavLink>    
            <NavLink to="/users">Users</NavLink>
        </div>
    );
};

export default Header;