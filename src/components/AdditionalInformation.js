import React from 'react';
import { Link } from "react-router-dom";

function AdditionalInformation() {
    return(
        <section className="banner-info">
            <div className="banner-info__overlay"></div>
            <div className="banner-info__text">
                <p className="banner-info__subtitle">PEOPLE READY-TO-HELP</p>
                <h1 className="banner-info__title">Provides All Essential Accessory Tips</h1>
                <Link to="/shows" className="banner-info__link">Discover the our shows</Link>
            </div>
        </section>
    )
}

export default AdditionalInformation;