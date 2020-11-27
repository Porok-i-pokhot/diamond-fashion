import React from 'react';
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