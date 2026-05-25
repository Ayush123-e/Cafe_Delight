import React, { useState, useEffect } from 'react'

export default function SafeImage({ src, alt, className, ...props }) {
  const getFallbackImage = (altText = '', srcVal = '') => {
    const text = (altText + ' ' + srcVal).toLowerCase()
    
    if (
      text.includes('coffee') || 
      text.includes('latte') || 
      text.includes('espresso') || 
      text.includes('barista') || 
      text.includes('brew')
    ) {
      return 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=600&auto=format&fit=crop'
    }
    if (
      text.includes('matcha') || 
      text.includes('tea') || 
      text.includes('herbal') || 
      text.includes('bloom') || 
      text.includes('jasmine')
    ) {
      return 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=600&auto=format&fit=crop'
    }
    if (
      text.includes('cake') || 
      text.includes('pastry') || 
      text.includes('croissant') || 
      text.includes('dessert') || 
      text.includes('sweet') || 
      text.includes('chocolate') || 
      text.includes('mousse') ||
      text.includes('bread')
    ) {
      return 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop'
    }
    if (
      text.includes('cozy') || 
      text.includes('corner') || 
      text.includes('interior') || 
      text.includes('ambiance') || 
      text.includes('scene') ||
      text.includes('decor')
    ) {
      return 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop'
    }
    return 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop'
  }

  const [imgSrc, setImgSrc] = useState(src || getFallbackImage(alt, src))
  const [hasFailed, setHasFailed] = useState(false)

  useEffect(() => {
    setImgSrc(src || getFallbackImage(alt, src))
    setHasFailed(false)
  }, [src, alt])

  const handleError = () => {
    if (!hasFailed) {
      setHasFailed(true)
      setImgSrc(getFallbackImage(alt, src))
    }
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  )
}
