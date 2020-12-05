import React from 'react';
import { Link } from "react-router-dom";

function Gallery({header, title, info, link}) {
    return(
        <section className="gallery">
            { header && <p className="gallery__header">{header}</p> }
            <h2 className="gallery__title">{title}</h2>
            <p className="gallery__info">{info}</p>
            <Link to="" className="gallery__link">{link}</Link>
        </section>
    )
}

export default Gallery;