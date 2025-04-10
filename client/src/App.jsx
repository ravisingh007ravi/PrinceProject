import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ArcStrip from './components/ArcStrip'
import ArcWatch from './components/ArcWatch'
import OurStory from './components/OurStory'
import Skins from './components/Skins'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ourstroy' element={<OurStory />} />
        <Route path='/anracwatch' element={<ArcWatch />} />
        <Route path='/anarcstrap' element={<ArcStrip />} />
        <Route path='/skins' element={<Skins />} />

      </Routes>
    </BrowserRouter>
  )
}
