import React from 'react';
import {NavLink} from "react-router-dom";

function ContactMenu() {
    return(
        <nav className="contact-menu">
            <NavLink to="/country" activeClassName="contact-menu__link_active" className="contact-menu__link">
                United States</NavLink>
            <NavLink to="/stores" activeClassName="contact-menu__link_active" className="contact-menu__link">
                Find a store</NavLink>
            <NavLink to="/messengers" activeClassName="contact-menu__link_active" className="contact-menu__link">
                Contact us</NavLink>
        </nav>
    )
}

export default ContactMenu;