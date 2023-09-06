import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Trending from './components/Trending'
import OldSongs from './components/OldSongs'

import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/trending' element={<Trending/>} />
        <Route path='/oldsongs' element={<OldSongs/>} />
       
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App
