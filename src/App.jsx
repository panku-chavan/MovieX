import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { fetchDataFromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration, getGenres } from './redux/homeSlice';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Home from './pages/home/Home'
import Deatils from './pages/details/Deatils'
import SearchResult from './pages/searchResult/SearchResult'
import Explore from './pages/explore/Explore'
import PageNotFound from './pages/404/PageNotFound'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import TermsOfuse from './pages/footer/TermsOfuse'
import PrivacyPolicy from './pages/footer/PrivacyPolicy'
import AboutUs from './pages/footer/AboutUs'
import Blog from './pages/footer/Blog'
import Faq from './pages/footer/Faq'


function App() {

  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home)
  // console.log(url)
  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((res) => {

      const url = {
        backdrop: res?.images.secure_base_url + "original",
        poster: res?.images.secure_base_url + "original",
        profile: res?.images.secure_base_url + "original"
      }

      dispatch(getApiConfiguration(url))
      // console.log(res)
    })
  }
  useEffect(() => {
    fetchApiConfig()
    generesCall()
  }, [])

  const generesCall = async () => {
    let promises = [];
    let endPoint = ["tv", "movie"]
    let allGeneres = {}

    endPoint.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises)

    data.map(({ genres }) => {
      return genres.map((item) => (allGeneres[item.id] = item))
    });

    dispatch(getGenres(allGeneres))



  }



  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Deatils />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='/termsofuse' element={<TermsOfuse />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
