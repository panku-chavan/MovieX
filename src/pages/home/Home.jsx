import React from 'react'
import "./style.scss"
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/trending'
import Popular from './popular/Popular'
const Home = () => {
    return (
        <div className='homePage'>
            <HeroBanner />
            <Trending />
            <Popular />

        </div>
    )
}

export default Home