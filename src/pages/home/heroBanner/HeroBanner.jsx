import React, { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { data, loading } = useFetch("/movie/upcoming")

    const searchQueryhandler = (e) => {
        if (e.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }
        //navigate(`/search/${query}`)
    };
    return (
        <div className="heroBanner">
            <div className="wrapper">
                <div className="heroBannerContent">
                    <span className="title">Welcome</span>
                    <span className="subtitle">
                        Millions of movies, TV shows and people to discover. Explore now
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for movie or TV show..."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryhandler}
                        />

                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
