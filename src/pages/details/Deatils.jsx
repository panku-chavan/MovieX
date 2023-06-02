import React from 'react'
import "./style.scss"
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailsBanner/DetailsBanner'
import Cast from './cast/Cast'
import VideosSection from './videosSection/VideosSection'
import Recommendation from './carousels/Recomendation'
const Deatils = () => {
    const params = useParams();
    const { data, loading } = useFetch(`/${params.mediaType}/${params.id}/videos`)
    const { data: credits, loading: creditsLoading } = useFetch(`/${params.mediaType}/${params.id}/credits`)
    return (
        <div>
            <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
            <Cast data={credits?.cast} loading={creditsLoading} />
            <VideosSection data={data} loading={loading} />
            <Recommendation mediaType={params.mediaType} id={params.id} />

        </div>
    )
}

export default Deatils