import React from 'react';

function Card8Layout({name, link}) {
    return(
        <div className="card-accessories">
            <div className="card-accessories__image" style={{backgroundImage: `url(${link})`}}/>
            <h2 className="card-accessories__title">{name}</h2>
        </div>
    )
}

export default Card8Layout;