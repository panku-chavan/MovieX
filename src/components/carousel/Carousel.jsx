import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";

import "./style.scss";


const Carousel = ({ data, loading }) => {


    const carouselContainer = useRef();
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();

    const navigation = (direction) => {

    }
    return (
        <div className="carousel">
            <ContentWrapper>
                <BsFillArrowLeftCircleFill
                    className="carouselLeftNav arrow"
                    onClick={() => navigation("left")}
                />
                <BsFillArrowRightCircleFill
                    className="carouselRightNav arrow"
                    onClick={() => navigation("right")}
                />
                {
                    !loading ? (
                        <div className="carouselItems">
                            {
                                data?.map((item) => {
                                    const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback;
                                    return (
                                        <div key={item.id} className="carouselItem">
                                            <div className="posterBlock">
                                                <Img src={posterUrl} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : (
                        <span>Loading....</span>
                    )
                }
            </ContentWrapper>
        </div>
    )
}

export default Carousel