import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { data, loading } = useFetch("/movie/upcoming");

    const { url } = useSelector((state) => state.home);


    useEffect(() => {
        const bg = url?.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg)
    }, [data])

    const searchQueryhandler = (e) => {
        if (e.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }
        //navigate(`/search/${query}`)
    };
    return (
        <div className="heroBanner">
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}

            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryhandler}
                        />
                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;
