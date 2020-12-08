import React from 'react';
import EmailForm from "./EmailForm";
import SiteMap from "./SiteMap";
import PostFooter from "./PostFooter";

function Footer() {
    return (
        <>
            <EmailForm
                buttonTitle="Subscribe"
                firstLink="Terms and Conditions of Use"
                secondLink="Privacy policy"
                title="Let's keep the conversation going"
                info="Receive our newsletter and discover our stories, collections and surprises"
                secondInfo="By subscribing to our newsletter, you agree that your data will be processed in compliance with our General "
                secondInfoInsert=" and our "
            />
            <SiteMap/>
            <PostFooter/>
        </>
    )
}

export default Footer;