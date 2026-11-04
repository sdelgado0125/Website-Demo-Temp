import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import CallFloat from './components/CallFloat.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Reviews from './pages/Reviews.jsx'
import Services from './pages/Services.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <CallFloat />
    </div>
  )
}
