import React, { useState } from 'react'
import MenuCard from '../components/MenuCard'
import './Menu.css'

const CATEGORIES = [
  { id: 'coffee', label: 'Coffee', icon: '☕' },
  { id: 'tea', label: 'Tea', icon: '🍵' },
  { id: 'desserts', label: 'Desserts', icon: '🍰' },
  { id: 'snacks', label: 'Snacks', icon: '🥐' },
]

/* Placeholder gradient images using CSS data URIs */
const coffeeGrad = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop'
const teaGrad = 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop'
const dessGrad = 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop'
const snackGrad = 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop'
const espGrad = 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop'
const capGrad = 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop'
const matchaGrad = 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=300&fit=crop'
const chaiGrad = 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop'
const tiramGrad = 'https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=400&h=300&fit=crop'
const macaronGrad = 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=400&h=300&fit=crop'
const sandwGrad = 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop'
const avocGrad = 'https://www.rootsandradishes.com/wp-content/uploads/2017/08/avocado-toast-with-everything-bagel-seasoning-feat.jpg'

const MENU_ITEMS = {
  coffee: [
    { id: 1, name: 'Signature Espresso', price: '4.50', description: 'A bold double shot with caramel undertones and a velvety crema. Our house blend, roasted in-house weekly.', image: espGrad, popular: true },
    { id: 2, name: 'Creamy Cappuccino', price: '5.20', description: 'Equal parts espresso, steamed milk, and velvety foam. The perfect morning pick-me-up.', image: capGrad, popular: false },
    { id: 3, name: 'Oat Milk Latte', price: '5.80', description: 'Our house espresso paired with organic oat milk for a silky, naturally sweet experience.', image: coffeeGrad, popular: true },
    { id: 4, name: 'Cold Brew Supreme', price: '5.50', description: 'Steeped for 18 hours in cold water, this smooth, low-acid concentrate is never bitter.', image: coffeeGrad, popular: false },
    { id: 5, name: 'Spiced Honey Brew', price: '6.00', description: 'Cardamom, cinnamon, and raw honey swirled into a warm, aromatic cup that warms the soul.', image: espGrad, popular: true },
    { id: 6, name: 'Vanilla Flat White', price: '5.40', description: 'Two ristretto shots with smooth microfoam and a hint of Madagascar vanilla. Silky perfection.', image: capGrad, popular: false },
  ],
  tea: [
    { id: 7, name: 'Jasmine Bloom Tea', price: '3.80', description: 'Delicate jasmine blossoms over premium Chinese green tea. Light, floral, and deeply soothing.', image: matchaGrad, popular: true },
    { id: 8, name: 'Masala Chai Latte', price: '4.50', description: 'A spiced black tea blend with ginger, cardamom, and cinnamon. Served with steamed oat milk.', image: chaiGrad, popular: true },
    { id: 9, name: 'Earl Grey Supreme', price: '4.00', description: 'Classic Earl Grey elevated with lavender and a hint of bergamot. Served in a beautiful teapot.', image: teaGrad, popular: false },
    { id: 10, name: 'Ceremonial Matcha', price: '5.20', description: 'Grade A Japanese matcha whisked to perfection with oat milk. Earthy, vibrant, and energizing.', image: matchaGrad, popular: true },
    { id: 11, name: 'Hibiscus Rose Iced Tea', price: '4.20', description: 'Tart hibiscus flowers with rose petals and a touch of honey. Refreshingly stunning.', image: teaGrad, popular: false },
    { id: 12, name: 'Golden Turmeric Latte', price: '4.80', description: 'Turmeric, ginger, and black pepper in warm oat milk. Anti-inflammatory and absolutely delicious.', image: chaiGrad, popular: false },
  ],
  desserts: [
    { id: 13, name: 'Tiramisu Classic', price: '6.50', description: 'Layers of coffee-soaked ladyfingers, mascarpone, and dusted cocoa. A love letter to Italian cuisine.', image: tiramGrad, popular: true },
    { id: 14, name: 'Pistachio Macarons (3)', price: '5.80', description: 'Crisp shells with a chewy interior and rich pistachio ganache. A French delicacy made with care.', image: macaronGrad, popular: true },
    { id: 15, name: 'Chocolate Lava Cake', price: '7.20', description: 'Warm, gooey dark chocolate center in a delicate sponge. Served with vanilla bean ice cream.', image: dessGrad, popular: false },
    { id: 16, name: 'Seasonal Fruit Tart', price: '6.00', description: 'Buttery pastry crust filled with vanilla custard and topped with fresh seasonal fruits.', image: macaronGrad, popular: false },
    { id: 17, name: 'Crème Brûlée', price: '6.80', description: 'Classic French custard with a caramelized sugar crust. Cracked tableside for a theatrical finish.', image: dessGrad, popular: true },
    { id: 18, name: 'Affogato', price: '5.50', description: 'A scoop of house-made vanilla gelato "drowned" in a shot of hot espresso. Pure brilliance.', image: tiramGrad, popular: false },
  ],
  snacks: [
    { id: 19, name: 'Almond Butter Croissant', price: '3.80', description: 'Golden, flaky, and freshly baked. Filled with house-made almond butter cream and sliced almonds.', image: snackGrad, popular: true },
    { id: 20, name: 'Avocado Toast', price: '8.50', description: 'Sourdough topped with smashed avocado, poached egg, chili flakes, and microgreens.', image: avocGrad, popular: true },
    { id: 21, name: 'Smoked Salmon Bagel', price: '9.00', description: 'Open-faced toasted bagel with cream cheese, wild smoked salmon, capers, and red onion.', image: sandwGrad, popular: false },
    { id: 22, name: 'Granola & Yogurt Bowl', price: '6.50', description: 'House-made granola, Greek yogurt, fresh berries, and a drizzle of local honey.', image: snackGrad, popular: false },
    { id: 23, name: 'Club Sandwich', price: '10.50', description: 'Triple-decker with grilled chicken, bacon, lettuce, tomato, and Dijon mayo on toasted brioche.', image: sandwGrad, popular: true },
    { id: 24, name: 'Cheese & Charcuterie', price: '13.00', description: 'A curated board of aged cheeses, cured meats, seasonal preserves, nuts, and artisanal crackers.', image: avocGrad, popular: false },
  ],
}

export default function Menu() {
  const [active, setActive] = useState('coffee')
  const [animating, setAnimating] = useState(false)

  const switchCategory = (id) => {
    if (id === active) return
    setAnimating(true)
    setTimeout(() => {
      setActive(id)
      setAnimating(false)
    }, 250)
  }

  const items = MENU_ITEMS[active]

  return (
    <div className="menu-page">
      {/* Page Hero */}
      <div className="menu-page__hero">
        <div className="menu-page__hero-bg" />
        <div className="container menu-page__hero-content">
          <p className="menu-page__eyebrow">Crafted with Passion</p>
          <h1 className="menu-page__title">Our Menu</h1>
          <span className="menu-page__title-line" aria-hidden="true" />
          <p className="menu-page__subtitle">
            Every item prepared fresh, every day, with seasonal ingredients and a whole lot of love.
          </p>
        </div>
        <div className="menu-page__hero-wave">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0 100V55C360 10 720 80 1080 35L1440 60V100H0Z" fill="var(--cream)" />
          </svg>
        </div>
      </div>

      {/* Category Tabs */}
      <section className="menu-page__categories section-padding-sm">
        <div className="container">
          <div className="menu-page__tabs" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={active === cat.id}
                className={`menu-page__tab${active === cat.id ? ' menu-page__tab--active' : ''}`}
                onClick={() => switchCategory(cat.id)}
              >
                <span className="menu-page__tab-icon">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Items Grid */}
          <div className={`menu-page__grid${animating ? ' menu-page__grid--exit' : ''}`}>
            {items.map((item, idx) => (
              <div
                key={item.id}
                className="menu-page__item-appear"
                style={{ animationDelay: `${idx * 0.07}s` }}
              >
                <MenuCard
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  popular={item.popular}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Allergen Note */}
      <div className="menu-page__note">
        <div className="container">
          <p>
            We cater to all dietary needs. Please inform our staff of any allergies.
            Vegan, gluten-free, and nut-free options available on request.
          </p>
        </div>
      </div>
    </div>
  )
}
