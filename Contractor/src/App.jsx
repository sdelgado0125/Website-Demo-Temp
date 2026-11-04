import { useEffect } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import { SHOP } from './content.js'
import BeforeAfter from './pages/BeforeAfter.jsx'
import Contact from './pages/Contact.jsx'
import Gallery from './pages/Gallery.jsx'
import Home from './pages/Home.jsx'
import Reviews from './pages/Reviews.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import Services from './pages/Services.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function NotFound() {
  return (
    <header className="page-intro">
      <p className="eyebrow">{SHOP.name}</p>
      <h1>That page is not here.</h1>
      <p>
        <Link to="/">Back to the home page</Link>
      </p>
    </header>
  )
}

export default function App() {
  useEffect(() => {
    document.title = `${SHOP.name} | ${SHOP.tagline}`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', SHOP.description)
  }, [])

  return (
    <div className="app">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/before-after" element={<BeforeAfter />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <div className="callbar">
        <a href={`tel:${SHOP.mobileE164}`}>Call</a>
        <Link to="/contact">Free estimate</Link>
      </div>
    </div>
  )
}
