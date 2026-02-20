import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCoffee, FiStar, FiCalendar } from 'react-icons/fi'
import TestimonialCarousel from '../components/TestimonialCarousel'
import './Home.css'

/* --- Featured Items Data --- */
const FEATURED = [
  {
    id: 1,
    image: 'https://49thcoffee.com/cdn/shop/products/Lifestyle2_d3a5834d-35c4-4c89-ac51-5022069cd61d_1024x1024.png?v=1761971952', // ← paste your image URL here
    name: 'Signature Espresso',
    price: '$4.50',
    desc: 'A bold, velvety double shot with caramel undertones and a perfect crema.',
    color: '#6B3A1F',
  },
  {
    id: 2,
    image: 'https://cdn.shopify.com/s/files/1/0573/2037/4390/files/camille_67988_loose_leaf_decaf_jasmine_tea_being_steeped_in_a_3fc07b12-2b46-4a18-8289-29bb23661959_1_1000x.png?v=1745094178', // ← paste your image URL here
    name: 'Jasmine Bloom Tea',
    price: '$3.80',
    desc: 'Delicate jasmine blossoms steeped with premium green tea. Floral and soothing.',
    color: '#4A7C59',
  },
  {
    id: 3,
    image: 'https://www.bbassets.com/media/uploads/p/l/40037504_2-fresho-signature-croissants-butter.jpg', // ← paste your image URL here
    name: 'Butter Croissant',
    price: '$3.20',
    desc: 'Freshly baked every morning. Golden, flaky, and impossibly buttery.',
    color: '#B8860B',
  },
]

/* --- Events/Offers Data --- */
const OFFERS = [
  {
    id: 1,
    tag: 'Weekend Special',
    title: 'Buy 2 Coffees, Get a Pastry Free',
    desc: 'Make your weekend morning magical. Valid Sat & Sun, 7am–12pm.',
    image: 'https://cremecastle.in/cdn/shop/files/2_Choco_truffle_Pastry.jpg?v=1757072564', // ← paste your image URL here
    color: '#C49A6C',
  },
  {
    id: 2,
    tag: 'New Arrival',
    title: 'Spring Blossom Matcha Latte',
    desc: 'Ceremonial grade matcha with oat milk and edible rose petals. Limited season.',
    image: 'https://www.bhg.com/thmb/s6lnWZ-9PD2Me9Su8tyLjY45_rc=/2413x0/filters:no_upscale():strip_icc()/IMG_50382_2-944fca750af44c2f8e318ecd6feeb793.png', // ← paste your image URL here
    color: '#9B7DB6',
  },
  {
    id: 3,
    tag: 'Monthly Event',
    title: 'Latte Art Masterclass',
    desc: 'Join our barista for a 90-min hands-on latte art workshop. Last Friday each month.',
    image: 'https://www.artisancoffeeschool.co.uk/wp-content/uploads/2023/10/ACS_Classes_1x1_LatteArtMC.jpg', // ← paste your image URL here
    color: '#5B8FB0',
  },
]

/* --- Animated Counter Hook --- */
function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0
        const step = target / (duration / 16)
        const timer = setInterval(() => {
          start += step
          if (start >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(start))
        }, 16)
        observer.disconnect()
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])
  return [count, ref]
}

function StatBubble({ value, label, suffix = '' }) {
  const [count, ref] = useCountUp(value)
  return (
    <div className="home-stats__item" ref={ref}>
      <span className="home-stats__num">{count}{suffix}</span>
      <span className="home-stats__label">{label}</span>
    </div>
  )
}

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          {/* Hero background image – paste your café scene image URL below */}
          <img
            src="https://assets.architecturaldigest.in/photos/63c658b88df6b9fdb924d938/master/w_1600%2Cc_limit/Maai-10.jpg" 
            alt="Café Delight interior"
            className="hero__bg-img"
          />
          <div className="hero__bg-overlay" />
          <div className="hero__steam">
            <div className="hero__steam-particle" />
            <div className="hero__steam-particle" />
            <div className="hero__steam-particle" />
          </div>
        </div>
        <div className={`hero__content container${heroVisible ? ' hero__content--visible' : ''}`}>
          <p className="hero__eyebrow">Welcome to</p>
          <h1 className="hero__title">Café Delight</h1>
          <p className="hero__subtitle">
            Where Every Sip Tells a Story
          </p>
          <p className="hero__desc">
            Step into warmth. Discover handcrafted coffees, artisanal teas, and
            house-baked pastries in the heart of the city.
          </p>
          <div className="hero__actions">
            <Link to="/menu" className="btn-primary hero__btn-primary">
              Explore Our Menu <FiArrowRight />
            </Link>
            <Link to="/about" className="btn-outline-light">
              Our Story
            </Link>
          </div>
        </div>

        {/* Wave divider */}
        <div className="hero__wave" aria-hidden="true">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0 100V60C360 0 720 80 1080 30L1440 60V100H0Z" fill="var(--cream)" />
          </svg>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="home-stats section-padding-sm">
        <div className="container">
          <div className="home-stats__grid">
            <StatBubble value={14} label="Years of Excellence" suffix="+" />
            <StatBubble value={50000} label="Happy Customers" suffix="+" />
            <StatBubble value={42} label="Menu Creations" suffix="+" />
            <StatBubble value={98} label="Satisfaction Rate" suffix="%" />
          </div>
        </div>
      </section>

      {/* ===== FEATURED ITEMS ===== */}
      <section className="home-featured section-padding" id="featured">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Chef's Selection</span>
            <h2>Our Signature Creations</h2>
            <p>Handcrafted with the finest ingredients, each item is a labor of love.</p>
            <div className="heading-divider" />
          </div>
          <div className="home-featured__grid">
            {FEATURED.map((item, idx) => (
              <div
                className="home-featured__card"
                key={item.id}
                style={{ animationDelay: `${idx * 0.15}s`, '--card-accent': item.color }}
              >
                <div className="home-featured__card-img-wrap">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="home-featured__card-img"
                  />
                </div>
                <div className="home-featured__card-body">
                  <h3 className="home-featured__card-name">{item.name}</h3>
                  <p className="home-featured__card-desc">{item.desc}</p>
                  <div className="home-featured__card-footer">
                    <span className="home-featured__card-price">{item.price}</span>
                    <Link to="/menu" className="home-featured__card-link">
                      View in Menu <FiArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="home-featured__cta">
            <Link to="/menu" className="btn-secondary">
              See Full Menu <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== COFFEE STRIP ===== */}
      <section className="home-strip">
        <div className="home-strip__inner">
          <div className="home-strip__content">
            <FiCoffee size={32} />
            <div>
              <h3>Ready to experience the perfect cup?</h3>
              <p>Visit us today or reserve your table in advance.</p>
            </div>
            <Link to="/contact" className="btn-primary">
              Reserve a Table <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== OFFERS / EVENTS ===== */}
      <section className="home-offers section-padding" id="offers">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What's Happening</span>
            <h2>Latest Offers & Events</h2>
            <p>Special moments, seasonal treats, and exclusive events just for you.</p>
            <div className="heading-divider" />
          </div>
          <div className="home-offers__grid">
            {OFFERS.map((offer, idx) => (
              <div
                className="home-offers__card"
                key={offer.id}
                style={{ '--offer-color': offer.color, animationDelay: `${idx * 0.15}s` }}
              >
                <div className="home-offers__img-wrap">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="home-offers__img"
                  />
                </div>
                <span className="home-offers__tag">{offer.tag}</span>
                <h3 className="home-offers__title">{offer.title}</h3>
                <p className="home-offers__desc">{offer.desc}</p>
                <button className="home-offers__btn">
                  <FiCalendar size={13} /> Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="home-testimonials section-padding">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Guest Stories</span>
            <h2>What Our Guests Say</h2>
            <p>Real words from the people who make Café Delight what it is.</p>
            <div className="heading-divider" />
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="home-gallery section-padding-sm">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Our Ambiance</span>
            <h2>Life at the Café</h2>
            <div className="heading-divider" />
          </div>
          <div className="home-gallery__grid">
            {[
              { image: 'https://www.exoticgroup.mu/media/v0zciqj2/1.jpg?anchor=center&mode=crop&width=681&height=560&rnd=133724395564900000', label: 'Artisan Coffee' },   // ← paste image URL
              { image: 'https://butterflyayurveda.com/cdn/shop/articles/Natural_Delights_of_Herbal_Tea_for_Health_and_Wellness.jpg?v=1689661898', label: 'Herbal Teas' },       // ← paste image URL
              { image: 'https://images.stockcake.com/public/b/8/b/b8bca4f2-33d0-40cb-a267-d57d747713cc_large/assorted-breakfast-pastries-stockcake.jpg', label: 'Fresh Pastries' },    // ← paste image URL
              { image: 'https://www.dessertfortwo.com/wp-content/uploads/2018/11/Chocolate-Mousse-Cake-12-735x1103.jpg', label: 'Desserts' },          // ← paste image URL
              { image: 'https://www.commercialdesignindia.com/cloud/2025/08/30/Untitled-design.png', label: 'Cozy Corners' },      // ← paste image URL
              { image: 'https://cdn.prod.website-files.com/63d06722a6f6c82db2e3292f/64e75c6c5e7e3d584cdaff62_AdobeStock_300876957.jpeg', label: 'Special Events' },    // ← paste image URL
            ].map((g, i) => (
              <div className="home-gallery__item" key={i}>
                <img
                  src={g.image}
                  alt={g.label}
                  className="home-gallery__item-img"
                />
                <div className="home-gallery__item-overlay">
                  <span>{g.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/about" className="btn-secondary">
              <FiStar /> See Our Full Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
