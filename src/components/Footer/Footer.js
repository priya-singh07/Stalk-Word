import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <hr style={{ width: "90%", marginTop: 20 }} />
            <span className="name">
                Made by Priya Singh
            </span>
            <div className="iconContainer">

                <a href="https://github.com/priya-singh07" className="link" target="_blank"><GitHubIcon/></a>
              <a href="https://www.facebook.com/profile.php?id=100041087550369" className="link" target="_blank"><FacebookIcon /></a>
              <a href="https://www.linkedin.com/in/priya-singh-1b3124201/" className="link" target="_blank"><LinkedInIcon /></a>
            </div>
        </div>
    );
};

export default Footer;