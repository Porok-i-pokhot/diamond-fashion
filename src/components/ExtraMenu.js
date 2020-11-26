import React from 'react';
import extraMenu from "../images/extraMenu.svg";
import Search from "./Search";

function ExtraMenu() {
    return(
        <div className="extra-menu">
            <div className="extra-menu__main-part">
                <img src={extraMenu} className="extra-menu__logo" alt="три полоски" />
                <p className="extra-menu__title">Extra</p>
            </div>
            <Search/>
        </div>
    )
}

export default ExtraMenu;