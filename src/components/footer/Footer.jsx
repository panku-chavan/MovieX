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
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
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
                <div className="menuItems" style={{ marginTop: "30px" }}>
                    <span className="menuItem" onClick={() => navigate("/")}>&copy;2023 panku-chavan</span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
