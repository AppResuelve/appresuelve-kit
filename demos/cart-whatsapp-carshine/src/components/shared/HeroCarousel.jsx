import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

const DOTS_SIZES = 'w-2 h-2 rounded-full'

export function HeroCarousel({
  images = [],
  aspectRatio = 'aspect-[16/9]',
  maxHeight = 'max-h-[500px]',
  objectFit = 'object-contain',
  autoplay = true,
  autoplayInterval = 5000,
  showDots = true,
  showArrows = false,
  overlay = false,
  overlayText = '',
  overlaySubtext = '',
  ctaText = '',
  ctaLink = '/',
  className = '',
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const goTo = useCallback((index) => {
    setCurrentIndex(index)
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  useEffect(() => {
    if (!autoplay || isHovered || images.length <= 1) return

    const timer = setInterval(goToNext, autoplayInterval)
    return () => clearInterval(timer)
  }, [autoplay, autoplayInterval, isHovered, goToNext, images.length])

  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      goToNext()
    } else if (distance < -minSwipeDistance) {
      goToPrev()
    }
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div
      className={`relative w-full ${aspectRatio} ${maxHeight} overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full ${objectFit}`}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {overlay && (overlayText || overlaySubtext) && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30">
          <div className="text-center text-white px-4 max-w-2xl">
            {overlayText && (
              <h2 className="text-2xl md:text-4xl font-bold mb-2 drop-shadow-lg">
                {overlayText}
              </h2>
            )}
            {overlaySubtext && (
              <p className="text-base md:text-xl mb-4 drop-shadow-md opacity-90">
                {overlaySubtext}
              </p>
            )}
            {ctaText && (
              <Link
                to={ctaLink}
                className="inline-block px-6 py-2 bg-[var(--color-primary)] text-white rounded-md font-semibold hover:opacity-90 transition-opacity"
              >
                {ctaText}
              </Link>
            )}
          </div>
        </div>
      )}

      {showDots && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`${DOTS_SIZES} transition-all ${
                index === currentIndex
                  ? 'bg-white w-4'
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {showArrows && images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-gray-800 hover:bg-white transition-colors hidden md:flex"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-gray-800 hover:bg-white transition-colors hidden md:flex"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  )
}