import React from 'react'
import "./style.scss"
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailsBanner/DetailsBanner'
const Deatils = () => {
    // const params = useParams();
    // const {data, loading}= useFetch(`/${params.mediaType}/${params.id}`)
    return (
        <div>
            <DetailsBanner />
        </div>
    )
}

export default Deatils