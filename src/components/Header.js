import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import diamondLogo from '../images/diamondLogo.svg';
import extraMenu from '../images/extraMenu.svg';
import logoHuman from '../images/logoHuman.svg';
import logoCart from '../images/logoCart.svg';

function Header() {

    return(
        <header className="header">
            <nav className="contact-menu">
                <NavLink to="/country" activeClassName="contact-menu__link_active" className="contact-menu__link">
                    United States</NavLink>
                <NavLink to="/stores" activeClassName="contact-menu__link_active" className="contact-menu__link">
                    Find a store</NavLink>
                <NavLink to="/messengers" activeClassName="contact-menu__link_active" className="contact-menu__link">
                    Contact us</NavLink>
            </nav>
            <div className="general-menu">
                <div className="extra-menu">
                    <div className="extra-menu__main-part">
                        <img src={extraMenu} className="extra-menu__logo" alt="три полоски" />
                        <p className="extra-menu__title">Extra</p>
                    </div>
                    <input className="extra-menu__input" type="search" placeholder="Search"/>
                </div>
                <img src={diamondLogo} className="general-menu__logo" alt="diamond-fashion" />
                <div className="right-menu">
                    <Link to="/account" className="right-menu__link">
                        <img src={logoHuman} className="right-menu__human" alt="силуэт человека" />
                        <p className="right-menu__title">Account</p>
                    </Link>
                    <Link to="/cart" className="right-menu__link">
                        <img src={logoCart} className="right-menu__cart" alt="корзина" />
                        <p className="right-menu__title">Cart</p>
                    </Link>
                </div>
            </div>
        </header>

    )
}

export default Header;