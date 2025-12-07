'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Professional Trader',
    image: '/testimonials/alex.jpg',
    rating: 5,
    text: 'Margex has transformed my trading. The leverage options and copy trading features are incredible. Best platform I\'ve used.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Crypto Investor',
    image: '/testimonials/sarah.jpg',
    rating: 5,
    text: 'The mobile app is fantastic. I can manage my trades anywhere. The interface is intuitive and the execution is fast.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Day Trader',
    image: '/testimonials/michael.jpg',
    rating: 5,
    text: 'Low fees, high leverage, and excellent customer support. Margex has everything a serious trader needs.',
  },
  {
    name: 'Emma Wilson',
    role: 'Copy Trader',
    image: '/testimonials/emma.jpg',
    rating: 5,
    text: 'Copy trading on Margex has been a game-changer. I\'ve learned so much from following top traders and my portfolio has grown significantly.',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Our Traders Say
          </h2>
          <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto">
            Join thousands of satisfied traders who trust Margex for their cryptocurrency trading.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg p-8">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FFAA00] text-[#FFAA00]" />
              ))}
            </div>
            <p className="text-lg text-white mb-6 italic">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center">
                <span className="text-[#00D9FF] font-semibold">
                  {testimonials[currentIndex].name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="text-white font-semibold">{testimonials[currentIndex].name}</div>
                <div className="text-[#A0A0A0] text-sm">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-[#1E1E1E] border border-[#2A2A2A] rounded-full flex items-center justify-center hover:bg-[#2A2A2A] hover:border-[#00D9FF] transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-[#1E1E1E] border border-[#2A2A2A] rounded-full flex items-center justify-center hover:bg-[#2A2A2A] hover:border-[#00D9FF] transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#00D9FF] w-8' : 'bg-[#2A2A2A]'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

