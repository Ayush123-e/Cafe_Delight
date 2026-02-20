import React, { useState } from 'react'
import { FiUser, FiMail, FiMessageSquare, FiSend, FiMapPin, FiPhone, FiClock, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi'
import './Contact.css'

const SOCIALS = [
  { icon: <FiInstagram />, label: 'Instagram', handle: '@cafedelight', href: 'https://instagram.com', color: '#E1306C' },
  { icon: <FiTwitter />, label: 'Twitter', handle: '@cafedelight', href: 'https://twitter.com', color: '#1DA1F2' },
  { icon: <FiFacebook />, label: 'Facebook', handle: 'Café Delight', href: 'https://facebook.com', color: '#1877F2' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.'
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
    return e
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <div className="contact-hero">
        <div className="contact-hero__bg" />
        <div className="container contact-hero__content">
          <p className="contact-hero__eyebrow">Get in Touch</p>
          <h1 className="contact-hero__title">We'd Love to Hear From You</h1>
          <span className="contact-hero__title-line" aria-hidden="true" />
          <p className="contact-hero__subtitle">
            Reservations, events, feedback, or just a hello — our door is always open.
          </p>
        </div>
        <div className="contact-hero__wave">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0 100V50C360 5 720 80 1080 35L1440 55V100H0Z" fill="var(--cream)" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <section className="contact-main section-padding">
        <div className="container">
          <div className="contact-main__grid">

            {/* Left: Info */}
            <div className="contact-info">
              <h2 className="contact-info__heading">Visit Us</h2>
              <div className="contact-info__cards">
                <div className="contact-info__card">
                  <div className="contact-info__icon"><FiMapPin /></div>
                  <div>
                    <strong>Address</strong>
                    <p>42 Brew Lane, Coffee District<br />San Francisco, CA 90210</p>
                  </div>
                </div>
                <div className="contact-info__card">
                  <div className="contact-info__icon"><FiPhone /></div>
                  <div>
                    <strong>Phone</strong>
                    <p>+1 (555) 234-5678</p>
                  </div>
                </div>
                <div className="contact-info__card">
                  <div className="contact-info__icon"><FiMail /></div>
                  <div>
                    <strong>Email</strong>
                    <p>hello@cafedelight.com</p>
                  </div>
                </div>
                <div className="contact-info__card">
                  <div className="contact-info__icon"><FiClock /></div>
                  <div>
                    <strong>Hours</strong>
                    <p>
                      Mon–Fri: 7:00am – 9:00pm<br />
                      Sat–Sun: 8:00am – 10:00pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-socials">
                <h3 className="contact-socials__heading">Follow Along</h3>
                <div className="contact-socials__links">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-socials__link"
                      style={{ '--social-color': s.color }}
                    >
                      <span className="contact-socials__icon">{s.icon}</span>
                      <div>
                        <span className="contact-socials__platform">{s.label}</span>
                        <span className="contact-socials__handle">{s.handle}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="contact-form-wrap">
              <h2 className="contact-form__heading">Send a Message</h2>
              {submitted ? (
                <div className="contact-form__success">
                  <div className="contact-form__success-icon">✅</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out to us. We'll get back to you within 24 hours!</p>
                  <button className="btn-primary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="contact-form__row">
                    <div className={`contact-form__field${errors.name ? ' contact-form__field--error' : ''}`}>
                      <label htmlFor="cf-name"><FiUser /> Full Name</label>
                      <input
                        id="cf-name" type="text" name="name"
                        placeholder="Jane Smith"
                        value={form.name} onChange={handleChange}
                      />
                      {errors.name && <span className="contact-form__error">{errors.name}</span>}
                    </div>
                    <div className={`contact-form__field${errors.email ? ' contact-form__field--error' : ''}`}>
                      <label htmlFor="cf-email"><FiMail /> Email Address</label>
                      <input
                        id="cf-email" type="email" name="email"
                        placeholder="jane@example.com"
                        value={form.email} onChange={handleChange}
                      />
                      {errors.email && <span className="contact-form__error">{errors.email}</span>}
                    </div>
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="cf-subject"><FiMessageSquare /> Subject (optional)</label>
                    <input
                      id="cf-subject" type="text" name="subject"
                      placeholder="Reservation request, feedback, event inquiry..."
                      value={form.subject} onChange={handleChange}
                    />
                  </div>
                  <div className={`contact-form__field${errors.message ? ' contact-form__field--error' : ''}`}>
                    <label htmlFor="cf-message"><FiMessageSquare /> Your Message</label>
                    <textarea
                      id="cf-message" name="message" rows={6}
                      placeholder="Tell us how we can help or just say hello..."
                      value={form.message} onChange={handleChange}
                    />
                    {errors.message && <span className="contact-form__error">{errors.message}</span>}
                  </div>
                  <button type="submit" className="btn-primary contact-form__submit">
                    <FiSend /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Address Banner */}
      <section className="contact-address-banner">
        <div className="container">
          <div className="contact-address-banner__inner">
            <div className="contact-address-banner__icon">📍</div>
            <div className="contact-address-banner__text">
              <h2>Our Location</h2>
              <p className="contact-address-banner__address">
                42 Brew Lane, Coffee District<br />
                San Francisco, CA 90210, USA
              </p>
              <p className="contact-address-banner__landmark">
                Landmark: Opposite City Central Park, near the Old Clock Tower
              </p>
              <p className="contact-address-banner__note">
                📞 +1 (555) 234-5678 &nbsp;·&nbsp; ✉️ hello@cafedelight.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
