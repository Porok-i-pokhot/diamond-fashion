import React from 'react';
import { Link } from "react-router-dom";

function PreFooter() {
    return(
        <div className="pre-footer__container">
            <div className="pre-footer__block">
                <h2 className="pre-footer__title">Here to help</h2>
                <p className="pre-footer__info">Have a questions? You may find an answer in our FAQs. But you can also contact us:</p>
                <Link to="/call" className="pre-footer__link" >Call 100-444-7700</Link>
                <p className="pre-footer__info">Monday to Friday: 9:00 a.m. - 6:00 p.m. & Thursday: 9:00 a.m.
                    - 7:00 p.m. ET Saturday: 10:00 a.m. - 6:00 p.m.</p>
                <Link to="/email" className="pre-footer__link" >Send us an email</Link>
            </div>
            <div className="pre-footer__block">
                <h2 className="pre-footer__title">Our partners</h2>
                <p className="pre-footer__info">Check our partners:</p>
                <Link to="/partners" className="pre-footer__link">check all here</Link>
            </div>
        </div>
    )
}

export default PreFooter;