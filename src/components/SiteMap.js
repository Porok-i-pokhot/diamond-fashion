import React from 'react';
import SiteMapColumn from "./SiteMapColumn";

function SiteMap() {
    return(
        <div className="site-map">
            <SiteMapColumn
                title="Service"
                firstSection="Contact Us"
                secondSection="FAQ"
                thirdSection="Find a store"
                fourthSection="Gifting"
                fifthSection="Made to Measure"
            />
            <SiteMapColumn
                title="Orders"
                firstSection="Payment"
                secondSection="Shipping"
                thirdSection="Collect in store"
                fourthSection="Track orders"
                fifthSection="Exchange & returns"/>
            <SiteMapColumn
                title="Diamond House"
                firstSection="The Hermes Foundation"
                secondSection="Careers"
                thirdSection="Finance"
                fourthSection="Our partner brands"/>
            <SiteMapColumn
                title="Legal"
                firstSection="Terms and conditions"
                secondSection="Privacy & cookies"
                thirdSection="BCR"
                fourthSection="California Supply Act"
                fifthSection="Legal issues"
                sixthSection="Accessibility"/>
        </div>
    )
}

export default SiteMap;