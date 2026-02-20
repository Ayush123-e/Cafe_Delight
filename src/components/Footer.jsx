import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiInstagram, FiTwitter, FiFacebook, FiMapPin, FiPhone, FiMail, FiArrowRight } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="footer">
      <div className="footer__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80V40C240 0 480 60 720 40C960 20 1200 60 1440 30V80H0Z" fill="#2D1A08" />
        </svg>
      </div>

      <div className="footer__body">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <span>☕</span> Café Delight
              </Link>
              <p className="footer__tagline">
                Where every sip tells a story. Crafted with love, served with warmth since 2010.
              </p>
              <div className="footer__socials">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FiInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FiTwitter />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FiFacebook />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h4 className="footer__col-title">Explore</h4>
              <ul className="footer__links">
                {[['/', 'Home'], ['/menu', 'Our Menu'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([path, label]) => (
                  <li key={path}>
                    <Link to={path}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer__col">
              <h4 className="footer__col-title">Visit Us</h4>
              <ul className="footer__info">
                <li><FiMapPin /> 42 Brew Lane, Coffee District, CA 90210</li>
                <li><FiPhone /> +1 (555) 234-5678</li>
                <li><FiMail /> hello@cafedelight.com</li>
              </ul>
              <div className="footer__hours">
                <p><strong>Mon–Fri:</strong> 7am – 9pm</p>
                <p><strong>Sat–Sun:</strong> 8am – 10pm</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="footer__col">
              <h4 className="footer__col-title">Stay Updated</h4>
              <p className="footer__newsletter-text">
                Get the latest offers and seasonal menus right to your inbox.
              </p>
              {subscribed ? (
                <div className="footer__subscribed">
                  ✨ Thank you for subscribing!
                </div>
              ) : (
                <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    aria-label="Email for newsletter"
                  />
                  <button type="submit" aria-label="Subscribe">
                    <FiArrowRight />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Café Delight. All rights reserved.</p>
          <p>Made with ☕ and love.</p>
        </div>
      </div>
    </footer>
  )
}
