import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css'

export const NavigationBar = () => {
    return(
        <nav>
        <NavLink to="/" className="first-page">
            FIRST PAGE
        </NavLink>

        <NavLink to="/books" className="library">
            THE LIBRARY
        </NavLink>

        <NavLink to="/top-ten" className="top-rated">
            TOP RATED BOOKS
        </NavLink>
        </nav>
    )
}



