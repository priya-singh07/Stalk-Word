import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
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
                {/* <a href="" target="_blank">
                    {<i className="fab fa-facebook-square fa-2x"></i>}
                </a>
                <a href="" target="_blank">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="" target="_blank">
                    <i className="fab fa-youtube fa-2x"></i>
                </a> */}

                <a href="#" className="link"><YouTubeIcon/></a>
              <a href="#" className="link"><FacebookIcon /></a>
              <a href="#" className="link"><LinkedInIcon /></a>
            </div>
        </div>
    );
};

export default Footer;