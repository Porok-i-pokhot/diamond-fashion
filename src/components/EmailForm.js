import React from 'react';
import { Link } from "react-router-dom";

function EmailForm({buttonTitle, firstLink, secondLink, info, secondInfo, title, secondInfoInsert}) {
    return(
        <div className="email__container">
            <div className="email__header">
                <div className="email__text">
                    <h2 className="email__title">{title}</h2>
                    <p className="email__info">{info}</p>
                </div>
                <form className="email__form">
                    <input type="email" className="email__input" placeholder="Email"/>
                    <button className="email__button">{buttonTitle}</button>
                </form>
            </div>
            <div className="email__footer">
                <p>
                    {secondInfo}
                    <Link to="/terms" className="email__link">{firstLink}</Link>
                    <span className="email__insert">{secondInfoInsert}</span>
                    <Link to="/privacypolicy" className="email__link">{secondLink}</Link>
                </p>
            </div>
        </div>

    )
}

export default EmailForm;