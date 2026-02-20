import React, { useState } from 'react'
import MenuCard from '../components/MenuCard'
import './Menu.css'

const CATEGORIES = [
  { id: 'coffee', label: 'Coffee', icon: '☕' },
  { id: 'tea', label: 'Tea', icon: '🍵' },
  { id: 'desserts', label: 'Desserts', icon: '🍰' },
  { id: 'snacks', label: 'Snacks', icon: '🥐' },
]

const MENU_ITEMS = {
  coffee: [
    { id: 1, name: 'Signature Espresso', price: '₹180', description: 'A bold double shot with caramel undertones and a velvety crema. Our house blend, roasted in-house weekly.', image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop', popular: true },
    { id: 2, name: 'Creamy Cappuccino', price: '₹220', description: 'Equal parts espresso, steamed milk, and velvety foam. The perfect morning pick-me-up.', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop', popular: false },
    { id: 3, name: 'Oat Milk Latte', price: '₹260', description: 'Our house espresso paired with organic oat milk for a silky, naturally sweet experience.', image: 'https://images.unsplash.com/photo-1561882468-9110d70b03d4?w=400&h=300&fit=crop', popular: true },
    { id: 4, name: 'Cold Brew Supreme', price: '₹240', description: 'Steeped for 18 hours in cold water, this smooth, low-acid concentrate is never bitter.', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&h=300&fit=crop', popular: false },
    { id: 5, name: 'Spiced Honey Brew', price: '₹280', description: 'Cardamom, cinnamon, and raw honey swirled into a warm, aromatic cup that warms the soul.', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop', popular: true },
    { id: 6, name: 'Vanilla Flat White', price: '₹230', description: 'Two ristretto shots with smooth microfoam and a hint of Madagascar vanilla. Silky perfection.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', popular: false },
  ],
  tea: [
    { id: 7, name: 'Jasmine Bloom Tea', price: '₹150', description: 'Delicate jasmine blossoms over premium Chinese green tea. Light, floral, and deeply soothing.', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', popular: true },
    { id: 8, name: 'Masala Chai Latte', price: '₹120', description: 'A spiced black tea blend with ginger, cardamom, and cinnamon. Served with steamed oat milk.', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop', popular: true },
    { id: 9, name: 'Earl Grey Supreme', price: '₹160', description: 'Classic Earl Grey elevated with lavender and a hint of bergamot. Served in a beautiful teapot.', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop', popular: false },
    { id: 10, name: 'Ceremonial Matcha', price: '₹220', description: 'Grade A Japanese matcha whisked to perfection with oat milk. Earthy, vibrant, and energizing.', image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&h=300&fit=crop', popular: true },
    { id: 11, name: 'Hibiscus Rose Iced Tea', price: '₹170', description: 'Tart hibiscus flowers with rose petals and a touch of honey. Refreshingly stunning.', image: 'https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=400&h=300&fit=crop', popular: false },
    { id: 12, name: 'Golden Turmeric Latte', price: '₹190', description: 'Turmeric, ginger, and black pepper in warm oat milk. Anti-inflammatory and absolutely delicious.', image: 'https://images.unsplash.com/photo-1615485500704-8e3b55ef2959?w=400&h=300&fit=crop', popular: false },
  ],
  desserts: [
    { id: 13, name: 'Tiramisu Classic', price: '₹320', description: 'Layers of coffee-soaked ladyfingers, mascarpone, and dusted cocoa. A love letter to Italian cuisine.', image: 'https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=400&h=300&fit=crop', popular: true },
    { id: 14, name: 'Pistachio Macarons (3)', price: '₹280', description: 'Crisp shells with a chewy interior and rich pistachio ganache. A French delicacy made with care.', image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=400&h=300&fit=crop', popular: true },
    { id: 15, name: 'Chocolate Lava Cake', price: '₹350', description: 'Warm, gooey dark chocolate center in a delicate sponge. Served with vanilla bean ice cream.', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop', popular: false },
    { id: 16, name: 'Seasonal Fruit Tart', price: '₹290', description: 'Buttery pastry crust filled with vanilla custard and topped with fresh seasonal fruits.', image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&h=300&fit=crop', popular: false },
    { id: 17, name: 'Crème Brûlée', price: '₹330', description: 'Classic French custard with a caramelized sugar crust. Cracked tableside for a theatrical finish.', image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&h=300&fit=crop', popular: true },
    { id: 18, name: 'Affogato', price: '₹260', description: 'A scoop of house-made vanilla gelato "drowned" in a shot of hot espresso. Pure brilliance.', image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=300&fit=crop', popular: false },
  ],
  snacks: [
    { id: 19, name: 'Almond Butter Croissant', price: '₹180', description: 'Golden, flaky, and freshly baked. Filled with house-made almond butter cream and sliced almonds.', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop', popular: true },
    { id: 20, name: 'Avocado Toast', price: '₹320', description: 'Sourdough topped with smashed avocado, poached egg, chili flakes, and microgreens.', image: 'https://images.unsplash.com/photo-1603046891744-1f058abd48a8?w=400&h=300&fit=crop', popular: true },
    { id: 21, name: 'Smoked Salmon Bagel', price: '₹380', description: 'Open-faced toasted bagel with cream cheese, wild smoked salmon, capers, and red onion.', image: 'https://images.unsplash.com/photo-1627308595229-7830a5c18106?w=400&h=300&fit=crop', popular: false },
    { id: 22, name: 'Granola & Yogurt Bowl', price: '₹250', description: 'House-made granola, Greek yogurt, fresh berries, and a drizzle of local honey.', image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop', popular: false },
    { id: 23, name: 'Club Sandwich', price: '₹350', description: 'Triple-decker with grilled chicken, bacon, lettuce, tomato, and Dijon mayo on toasted brioche.', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop', popular: true },
    { id: 24, name: 'Cheese & Charcuterie', price: '₹550', description: 'A curated board of aged cheeses, cured meats, seasonal preserves, nuts, and artisanal crackers.', image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&h=300&fit=crop', popular: false },
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
