import React from 'react';
import SocialIcons from "./SocialIcons";
import diamondLogo from "../images/diamondLogo.svg";


function PostFooter() {
    return(
        <div className="post-footer">
            <section className="post-footer__header">
                <SocialIcons/>
                <p className="post-footer__author"> Morocco &copy; Copyright Uixone, Sarl 2017</p>
            </section>
            <img src={diamondLogo} className="post-footer__logo" alt="diamond-logo"/>
        </div>
    )
}

export default PostFooter;