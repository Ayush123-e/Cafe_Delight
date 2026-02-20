import React, { useState, useEffect, useCallback } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './TestimonialCarousel.css'

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Emily Johnson',
    role: 'Regular Customer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face&auto=format',
    rating: 5,
    text: 'Café Delight is my absolute favorite morning spot. The oat milk latte is perfectly crafted every single time, and the atmosphere just melts away all the stress. It truly feels like a home away from home.',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Food Blogger',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face&auto=format',
    rating: 5,
    text: 'I\'ve visited hundreds of cafés across the country and Café Delight stands out not just for its exceptional coffee, but for the warmth of its staff and the cozy, hand-designed interior. The croissants are divine!',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Design Professional',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&h=120&fit=crop&crop=face&auto=format',
    rating: 5,
    text: 'The perfect work café! Fast WiFi, great music volume, and the best matcha latte I\'ve ever had outside of Japan. I come here every week to work and always leave feeling inspired and caffeinated.',
  },
  {
    id: 4,
    name: 'James Williams',
    role: 'Coffee Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&h=120&fit=crop&crop=face&auto=format',
    rating: 5,
    text: 'From the moment you walk in, the aroma of freshly ground coffee wraps around you like a warm hug. The seasonal specials keep me coming back every month. Highly recommend the Spiced Honey Brew!',
  },
  {
    id: 5,
    name: 'Sophie Andre',
    role: 'Loyal Member',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&h=120&fit=crop&crop=face&auto=format',
    rating: 5,
    text: 'The dessert menu here is out of this world. Their tiramisu takes me straight to Italy every time. The staff remembers your name and your order — that personal touch is what sets Café Delight apart.',
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const go = useCallback((dir) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  useEffect(() => {
    const timer = setInterval(() => go(1), 5000)
    return () => clearInterval(timer)
  }, [go])

  const t = TESTIMONIALS[current]

  return (
    <div className="testimonial">
      <div className="testimonial__track">
        <div className={`testimonial__card${isAnimating ? ' testimonial__card--animating' : ''}`} key={t.id}>
          <div className="testimonial__stars">
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <blockquote className="testimonial__text">"{t.text}"</blockquote>
          <div className="testimonial__author">
            <div className="testimonial__avatar">
              <img src={t.avatar} alt={t.name} className="testimonial__avatar-img" />
            </div>
            <div>
              <p className="testimonial__name">{t.name}</p>
              <p className="testimonial__role">{t.role}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial__controls">
        <button className="testimonial__btn" onClick={() => go(-1)} aria-label="Previous">
          <FiChevronLeft />
        </button>
        <div className="testimonial__dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`testimonial__dot${i === current ? ' testimonial__dot--active' : ''}`}
              onClick={() => { if (!isAnimating) { setIsAnimating(true); setCurrent(i); setTimeout(() => setIsAnimating(false), 500) } }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button className="testimonial__btn" onClick={() => go(1)} aria-label="Next">
          <FiChevronRight />
        </button>
      </div>
    </div>
  )
}
