#  Café Delight – Where Every Sip Tells a Story

<div align="center">

![Café Delight](https://img.shields.io/badge/Café%20Delight-Premium%20Experience-brown?style=for-the-badge&logo=coffeescript&logoColor=white)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.1.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-6.22.0-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)

*A cozy, premium café experience — Discover handcrafted coffees, teas, desserts, and snacks in a warm and welcoming atmosphere.*

</div>

---

##  Table of Contents

- [Overview](#-overview)
- [Live Pages](#-live-pages)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Scripts](#-scripts)
- [Fonts & Design System](#-fonts--design-system)
- [Screenshots](#-screenshots)

---

##  Overview

**Café Delight** is a fully responsive, multi-page café website built with **React + Vite**. It showcases a premium and modern design system with smooth navigation, a curated menu, customer testimonials, an about section, and a functional contact page — all wrapped in a warm, aesthetically rich visual theme.

---

##  Live Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` |  Home | Hero section, featured items, testimonials carousel |
| `/menu` |  Menu | Full café menu with cards by category |
| `/about` |  About | Story, gallery, team section |
| `/contact` |  Contact | Contact form and café location info |

---

##  Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | `^18.2.0` | UI component library |
| [Vite](https://vitejs.dev/) | `^5.1.0` | Build tool & dev server |
| [React Router DOM](https://reactrouter.com/) | `^6.22.0` | Client-side routing (SPA) |
| [React Icons](https://react-icons.github.io/react-icons/) | `^5.0.1` | Icon components |
| Vanilla CSS | — | Component-scoped styling |
| Google Fonts | — | `Playfair Display` & `Inter` typography |

> **No CSS framework** (like Tailwind or Bootstrap) is used — all styling is hand-crafted with Vanilla CSS for full design control.

---

##  Project Structure

```
Cafe_Website/
├── public/
│   └── cafe-icon.svg            # Favicon / brand icon
│
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.jsx           # Responsive navigation bar
│   │   ├── Navbar.css
│   │   ├── Footer.jsx           # Site-wide footer
│   │   ├── Footer.css
│   │   ├── MenuCard.jsx         # Individual menu item card
│   │   ├── MenuCard.css
│   │   ├── TestimonialCarousel.jsx  # Customer reviews carousel
│   │   └── TestimonialCarousel.css
│   │
│   ├── pages/                   # Route-level page components
│   │   ├── Home.jsx             # Landing / home page
│   │   ├── Home.css
│   │   ├── Menu.jsx             # Full menu page
│   │   ├── Menu.css
│   │   ├── About.jsx            # About the café page
│   │   ├── About.css
│   │   ├── Contact.jsx          # Contact form & info page
│   │   └── Contact.css
│   │
│   ├── styles/
│   │   └── global.css           # Global CSS variables, resets, base styles
│   │
│   ├── App.jsx                  # Root component (Router + Layout)
│   └── main.jsx                 # React DOM entry point
│
├── index.html                   # HTML shell with meta tags & font imports
├── vite.config.js               # Vite configuration
├── package.json                 # Project metadata & dependencies
└── README.md                    # Project documentation
```

---

##  Features

-  **Hero Section** — Stunning landing with CTA and brand messaging
-  **Menu Cards** — Categorized food & beverage items with rich visuals
-  **Testimonial Carousel** — Auto-scrolling customer stories/reviews
-  **About Page** — Café story, visual gallery, and team showcase
-  **Contact Page** — Contact form with café address, hours, and map info
-  **Scroll to Top** — Smooth scroll-to-top on every route change
-  **Fully Responsive** — Mobile-first design across all pages
-  **Premium Design** — Playfair Display + Inter typography, warm color palette
-  **Lightning Fast** — Powered by Vite for instant HMR and optimized builds
-  **SPA Routing** — Seamless page transitions with React Router DOM




