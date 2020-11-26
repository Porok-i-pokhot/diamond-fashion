import React from 'react';
import { Link } from 'react-router-dom';
import diamondLogo from '../images/diamondLogo.svg';
import extraMenu from '../images/extraMenu.svg';
import logoHuman from '../images/logoHuman.svg';
import logoCart from '../images/logoCart.svg';
import ContactMenu from './ContactMenu';
import GeneralMenu from "./GeneralMenu";

function Header() {

    return(
        <header className="header">
           <ContactMenu />
           <GeneralMenu/>
        </header>

    )
}

export default Header;