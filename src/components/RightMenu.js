import React from 'react';
import {Link} from "react-router-dom";
import logoHuman from "../images/logoHuman.svg";
import logoCart from "../images/logoCart.svg";

function RightMenu() {
    return(
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
    )
}

export default RightMenu;