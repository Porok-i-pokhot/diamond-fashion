import React from 'react';
import diamondLogo from "../images/diamondLogo.svg";
import ExtraMenu from "./ExtraMenu";
import RightMenu from "./RightMenu";

function GeneralMenu() {
    return(
        <div className="general-menu">
            <ExtraMenu/>
            <img src={diamondLogo} className="general-menu__logo" alt="diamond-fashion" />
            <RightMenu/>
        </div>
    )
}

export default GeneralMenu;