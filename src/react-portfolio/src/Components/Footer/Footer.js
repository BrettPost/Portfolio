import React from "react";
import BrettFooter from './../../Assets/FoundersSmile.jpg';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div>
                <label>&#80;o&#115;t&#46;Bre&#116;t&#119;&#64;gm&#97;&#105;&#108;&#46;co&#109;</label>
                <label><Link to="https://www.linkedin.com/in/brett-post/">LinkedIn</Link></label>
                <label><Link to="https://twitter.com/Brett_wPost">X.com</Link></label>
            </div>
            <img src={BrettFooter} alt="Image of Brett Post wrestling a shark with a bucket hat on." />
            <div>
                <label>Brett Post's Portfolio</label>
                <label>v2.0.0</label>
            </div>
        </>
    )
}

export default Footer;