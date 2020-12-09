import React from 'react';

function SiteMapColumn({title, firstSection, secondSection, thirdSection, fourthSection, fifthSection, sixthSection}) {
    return(
        <div className="site-map__column">
            <h2 className="site-map__column_title">{title}</h2>
            <ul className="site-map__column_list">
                <li className="site-map__column_section">{firstSection}</li>
                <li className="site-map__column_section">{secondSection}</li>
                <li className="site-map__column_section">{thirdSection}</li>
                <li className="site-map__column_section">{fourthSection}</li>
                <li className="site-map__column_section">{fifthSection}</li>
                <li className="site-map__column_section">{sixthSection}</li>
            </ul>
        </div>
    )
}

export default SiteMapColumn;