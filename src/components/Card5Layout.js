import React from 'react';

function Card5Layout({name, link, price}) {
    return(
        <div className="card-5-layout">
            <div className="card-5-layout__image" style={{backgroundImage: `url(${link})`}}/>
            <h2 className="card-5-layout__title">{name}</h2>
            <p className="card-5-layout__price">{price}</p>
        </div>
    )
}

export default Card5Layout;