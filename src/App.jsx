import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { fetchDataFromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration } from './redux/homeSlice';

import Home from './pages/home/Home'
import Deatils from './pages/details/Deatils'
import SearchResult from './pages/searchResult/SearchResult'
import Explore from './pages/explore/Explore'
import PageNotFound from './pages/404/PageNotFound'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


function App() {

  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home)
  console.log(url)
  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((res) => {

      const url = {
        backdrop: res?.images.secure_base_url + "original",
        poster: res?.images.secure_base_url + "original",
        profile: res?.images.secure_base_url + "original"
      }

      dispatch(getApiConfiguration(url))
      console.log(res)
    })
  }
  useEffect(() => {
    fetchApiConfig()
  }, [])
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Deatils />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
