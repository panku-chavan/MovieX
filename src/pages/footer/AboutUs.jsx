import React from 'react'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import "./style.scss"
import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaRegStar
} from "react-icons/fa";

import { BiGitBranch } from "react-icons/bi"

import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <ContentWrapper>

            <div className='div1'>
                <span className='title'>About Us</span>
            </div>
            <div className="div3">
                <p className="paragraph">Welcome to TMDB movie application! I am passionate movie enthusiasts who created this app to provide users with a convenient platform to explore and discover popular movies.</p>
                <p className="title2">How It Works</p>
                <p className="paragraph">
                    This application interacts with the TMDB (The Movie Database) API to retrieve movie data such as titles, overviews, and images. By leveraging this API, we can offer a comprehensive selection of movies and ensure the accuracy of the information provided.
                </p>
                <hr style={{ marginTop: "20px" }} />
                <p className="title2" style={{ marginTop: "20px" }}>FIND ME</p>
                <p className='name'>Pankaj Chavan</p>
                <p className='paragraph'>Feel Free to connect with me.</p>
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
            <div className="socialIcons">
                <p className='star'>Give me a star<span style={{ marginLeft: "5px" }}>
                    <FaRegStar /></span></p>

                <Link className='icon' target='_blank' to={"https://github.com/panku-chavan/MovieX"} ><BiGitBranch /></Link>
            </div>
        </ContentWrapper>
    )
}

export default AboutUs