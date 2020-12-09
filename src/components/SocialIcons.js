import React from 'react';
import facebookIcon from '../images/facebookIcon.svg';
import googleIcon from '../images/googleIcon.svg';
import instagramIcon from '../images/instagramIcon.svg';
import twitterIcon from '../images/twitterIcon.svg';

function SocialIcons() {
    return(
        <section>
            <img src={googleIcon} alt="google-icon" className="post-footer__icon"/>
            <img src={twitterIcon} alt="twitter-icon" className="post-footer__icon"/>
            <img src={facebookIcon} alt="facebook-icon" className="post-footer__icon"/>
            <img src={instagramIcon} alt="instagram-icon" className="post-footer__icon"/>
        </section>
    )
}

export default SocialIcons;