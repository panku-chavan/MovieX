import React from 'react'
import "./style.scss"
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/trending'
const Home = () => {
    return (
        <div className='homePage'>
            <HeroBanner />
            <Trending />

        </div>
    )
}

export default Home