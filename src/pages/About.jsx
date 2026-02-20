import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiHeart, FiStar, FiUsers } from 'react-icons/fi'
import './About.css'

function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, inView]
}

const GALLERY = [
  { image: 'https://preview.redd.it/what-is-your-monday-morning-ritual-v0-u7z6fka2o6lf1.jpeg?width=1080&crop=smart&auto=webp&s=ea356ae33e214731a92f9786ef342f3b9fb645ec', label: 'Morning Rituals' },
  { image: 'https://media.istockphoto.com/id/1403534515/photo/chairs-and-tables-ready-for-diners-in-a-small-courtyard-patio-of-a-restaurant-cafe-in-the.jpg?s=612x612&w=0&k=20&c=o-Hy73eS0YCP9SS-ngYNkUL6lImBIhKCwSh0QiI-K2I=', label: 'Our Garden Corner' },
  { image: 'https://media.licdn.com/dms/image/v2/D5612AQHFqGHPradPww/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1712901596193?e=2147483647&v=beta&t=-Uf899ysN5ktIlsL9L0CxYCJzhI-TSWEF-Jcd7maDDw', label: 'Crafted in Kitchen' },
  { image: 'https://brewnestcafe.com/wp-content/uploads/2025/09/Music-night-at-cafe-jcs.jpeg', label: 'Live Music Nights' },
  { image: 'https://images.stockcake.com/public/b/2/1/b217f2d4-5ba1-4201-b53c-5384f74f71e4_large/cozy-reading-nook-stockcake.jpg', label: 'The Reading Nook' },
  { image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&h=400&fit=crop', label: 'Seasonal Specials' },
]

const VALUES = [
  {
    icon: <FiHeart size={28} />,
    title: 'Crafted with Love',
    desc: 'Every recipe is fine-tuned over years. We never compromise on ingredients or care.',
  },
  {
    icon: <FiStar size={28} />,
    title: 'Premium Quality',
    desc: 'We source single-origin coffee beans and locally-grown produce for every menu item.',
  },
  {
    icon: <FiUsers size={28} />,
    title: 'Community First',
    desc: 'Café Delight is a gathering place. We host events, support local artists, and give back.',
  },
]

const TEAM = [
  {
    image: 'https://images.stockcake.com/public/e/c/9/ec99397d-f907-4b71-b645-479318f7c71e_large/chef-serving-food-stockcake.jpg',
    name: 'Marco Bellini', role: 'Head Barista & Founder',
    desc: '20+ years crafting espresso in Milan and now right here for you.',
  },
  {
    image: 'https://www.mbbmanagement.com/wp-content/uploads/2017/09/Depositphotos_10674566_chef.jpg',
    name: 'Priya Iyer', role: 'Pastry Chef',
    desc: 'French-trained with a love for Indian spices, creating unique flavor fusions.',
  },
  {
    image: 'https://www.aviko.co.uk/_next/image?url=https%3A%2F%2Faviko-eu.s3.eu-west-2.amazonaws.com%2Funited_kingdom%2F2024-03%2Fhow_to_become_a_chef_image_2.jpg&w=1920&q=100',
    name: "James O'Brien", role: 'Tea Curator',
    desc: "Former tea estate consultant who brings the world's finest leaves to your cup.",
  },
]

export default function About() {
  const [storyRef, storyInView] = useInView()
  const [valuesRef, valuesInView] = useInView()
  const [teamRef, teamInView] = useInView()

  return (
    <div className="about-page">
      {/* Page Hero */}
      <div className="about-hero">
        <div className="about-hero__bg" />
        <div className="container about-hero__content">
          <p className="about-hero__eyebrow">Our Story</p>
          <h1 className="about-hero__title">Where the Magic Began</h1>
          <span className="about-hero__title-line" aria-hidden="true" />
          <p className="about-hero__subtitle">
            A small dream, a bag of quality beans, and an unshakeable belief that great coffee changes everything.
          </p>
        </div>
        <div className="about-hero__wave">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0 100V50C360 10 720 80 1080 30L1440 55V100H0Z" fill="var(--cream)" />
          </svg>
        </div>
      </div>

      {/* ===== STORY ===== */}
      <section className="about-story section-padding" ref={storyRef}>
        <div className="container">
          <div className={`about-story__grid${storyInView ? ' in-view' : ''}`}>
            <div className="about-story__visual">
              <div className="about-story__img-main">
                <img
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=500&fit=crop"
                  alt="Café interior"
                  className="about-story__img-photo"
                />
                <div className="about-story__img-caption">Est. 2010, Coffee District</div>
              </div>
              <div className="about-story__img-accent">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=250&fit=crop"
                  alt="Fresh coffee"
                  className="about-story__img-photo"
                />
              </div>
              <div className="about-story__stats-bubble">
                <strong>14+</strong>
                <span>Years of Joy</span>
              </div>
            </div>
            <div className="about-story__text">
              <span className="eyebrow" style={{ color: 'var(--light-brown)', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Our Beginning</span>
              <h2 className="about-story__heading">A Sip That Started It All</h2>
              <p>
                It was a rainy Tuesday in 2010 when Marco Bellini first opened the doors
                of Café Delight. Armed with nothing more than a hand-me-down espresso machine,
                a rented corner shop, and a mission to serve the neighborhood's best cup of coffee,
                he brewed his first espresso at 6:47 AM.
              </p>
              <p>
                By 9 AM, the line stretched out the door. By noon, he'd sold out of everything.
                Word spread fast — this wasn't just another café. This was somewhere you
                <em> felt something</em>.
              </p>
              <p>
                Today, Café Delight has welcomed over 50,000 guests across 14 years.
                We've grown, evolved, and welcomed incredible team members — but our
                promise remains unchanged: every cup, every bite, every smile, crafted with love.
              </p>
              <Link to="/contact" className="btn-primary" style={{ marginTop: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Visit Us Today <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARALLAX GALLERY ===== */}
      <section className="about-gallery">
        <div className="about-gallery__parallax">
          <div className="about-gallery__parallax-bg" />
          <div className="about-gallery__parallax-content">
            <h2>Life Inside the Café</h2>
            <p>Every corner tells a story. Every visit creates a memory.</p>
          </div>
        </div>
        <div className="container about-gallery__grid-wrap">
          <div className="about-gallery__grid">
            {GALLERY.map((item, i) => (
              <div
                key={i}
                className="about-gallery__item"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="about-gallery__item-img"
                />
                <div className="about-gallery__item-overlay">
                  <span className="about-gallery__label">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="about-values section-padding" ref={valuesRef}>
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What We Stand For</span>
            <h2>Our Core Values</h2>
            <p>Three pillars that define everything we do, every single day.</p>
            <div className="heading-divider" />
          </div>
          <div className={`about-values__grid${valuesInView ? ' in-view' : ''}`}>
            {VALUES.map((v, i) => (
              <div className="about-values__card" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="about-values__icon">{v.icon}</div>
                <h3 className="about-values__title">{v.title}</h3>
                <p className="about-values__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="about-team section-padding" ref={teamRef}>
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">The People Behind the Magic</span>
            <h2>Meet Our Team</h2>
            <p>Passionate, skilled, and always ready with a warm smile and an even warmer cup.</p>
            <div className="heading-divider" />
          </div>
          <div className={`about-team__grid${teamInView ? ' in-view' : ''}`}>
            {TEAM.map((member, i) => (
              <div className="about-team__card" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="about-team__avatar-wrap">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="about-team__avatar-img"
                  />
                </div>
                <h3 className="about-team__name">{member.name}</h3>
                <p className="about-team__role">{member.role}</p>
                <p className="about-team__desc">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <h2>Come Say Hello</h2>
          <p>We'd love to welcome you. Come in, slow down, and savor the moment.</p>
          <div className="about-cta__actions">
            <Link to="/contact" className="btn-primary">Find Us <FiArrowRight /></Link>
            <Link to="/menu" className="btn-secondary">Explore Menu</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
