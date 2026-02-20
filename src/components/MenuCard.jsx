import React from 'react'
import './MenuCard.css'

export default function MenuCard({ image, name, price, description, popular }) {
  return (
    <div className="menu-card">
      <div className="menu-card__img-wrap">
        <img src={image} alt={name} loading="lazy" />
        {popular && <span className="badge badge-popular menu-card__badge">★ Popular</span>}
      </div>
      <div className="menu-card__body">
        <div className="menu-card__header">
          <h3 className="menu-card__name">{name}</h3>
          <span className="menu-card__price">${price}</span>
        </div>
        <p className="menu-card__desc">{description}</p>
        <button className="menu-card__btn">Add to Order</button>
      </div>
    </div>
  )
}
