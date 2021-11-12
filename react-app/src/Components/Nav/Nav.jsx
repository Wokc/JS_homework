import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {
    return <ul>
        <li>
            <NavLink to='/hello'>hello</NavLink>
        </li>
        <li>
            <NavLink to='/about-us'>About Us</NavLink>
        </li>
    </ul>
}

export default Nav;