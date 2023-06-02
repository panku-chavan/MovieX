import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/similar`
    );

    let type = mediaType === "movie" ? "movie" : "tv";

    console.log(type)
    return (
        <Carousel
            title={mediaType === "tv" ? "Similar TV Shows" : "Similar Movies"}
            data={data?.results}
            loading={loading}
            endpoint={type}
        />
    );
};

export default Similar;