import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import OurStory from './pages/About/OurStory'
import WhyUs from './pages/About/WhyUs'
import Team from './pages/About/Team'
import Hair from './pages/Hair'
import Skin from './pages/Skin'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/our-story" element={<OurStory />} />
            <Route path="/about/why-us" element={<WhyUs />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/hair" element={<Hair />} />
            <Route path="/skin" element={<Skin />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
