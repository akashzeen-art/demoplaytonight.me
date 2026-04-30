import { useEffect, useState } from 'react'
import './Navbar.css'

export default function Navbar({ showPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (p) => {
    showPage(p)
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
      <img src="/logo/zeen_medeconect copy.png" alt="Zeen Mediconnect Logo" className="navbar-logo" onClick={() => handleNav('home')} />
      <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
        <span /><span /><span />
      </button>
      <div className={`navbar-links${menuOpen ? ' nav-open' : ''}`}>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNav('home') }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNav('about') }}>About Us</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNav('contact') }}>Contact Us</a>
      </div>
    </nav>
  )
}
