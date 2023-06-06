import React from "react";
import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem" onClick={() => navigate("/termsofuse")}>Terms Of Use</li>
                    <li className="menuItem" onClick={() => navigate("/privacy")}>Privacy Policy</li>
                    <li className="menuItem" onClick={() => navigate("/aboutus")}>About Us</li>
                    {/* <li className="menuItem" onClick={() => navigate("/blog")}>Blog</li> */}
                    {/* <li className="menuItem" onClick={() => navigate("/faq")}>FAQ</li> */}

                </ul>
                <div className="infoText">
                    Displaying popular movies: When you visit the home page, the app sends
                    a request to the TMDB API to fetch a list of popular movies. The
                    response is then used to display the movie titles and overviews on the
                    page.
                </div>
                <div className="socialIcons">
                    <Link
                        className="icon"
                        target="_blank"
                        to={"https://www.facebook.com/pankajsubhashchavan/"}
                    >
                        <FaFacebookF />
                    </Link>
                    <Link
                        className="icon"
                        target="_blank"
                        to={"https://github.com/panku-chavan/"}
                    >
                        <FaGithub />
                    </Link>
                    <Link
                        className="icon"
                        target="_blank"
                        to={"https://www.instagram.com/panku_chavan/"}
                    >
                        <FaInstagram />
                    </Link>
                    <Link
                        className="icon"
                        target="_blank"
                        to={"https://www.linkedin.com/in/pankaj-chavan-9ba6681ba/"}
                    >
                        <FaLinkedin />
                    </Link>
                    <Link
                        className="icon"
                        target="_blank"
                        to={"https://twitter.com/panku_chavan"}
                    >
                        <FaTwitter />
                    </Link>
                </div>
                <div className="menuItems" style={{ marginTop: "20px" }}>
                    <span className="menuItem" onClick={() => navigate("/")}>
                        &copy;2023 panku-chavan
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
