'use client'

import { Star } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'John Doe',
      rating: 5,
      text: 'Margex has been a game-changer for my trading. The platform is intuitive and the copy trading feature is amazing!',
    },
    {
      name: 'Emily',
      rating: 5,
      text: 'I love how secure and reliable Margex is. I can trade with confidence knowing my funds are safe.',
    },
    {
      name: 'Robert Evans',
      rating: 5,
      text: 'The copy trading feature has helped me learn from the best traders. Highly recommended!',
    },
  ]

  const appRatings = [
    { store: 'App Store', rating: 4.8 },
    { store: 'Google Play', rating: 4.5 },
  ]

  const mediaLogos = [
    'CoinMarketCap',
    'Business Insider',
    'Investing.com',
    'The Wall Street Journal',
    'Benzinga',
  ]

  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#141414] rounded-lg p-6 border border-[#2A2A2A]"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>
              <p className="text-[#A0A0A0] mb-4">{testimonial.text}</p>
              <p className="text-white font-semibold">— {testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* App Ratings */}
        <div className="flex justify-center gap-8 mb-16">
          {appRatings.map((rating, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(rating.rating)
                        ? 'fill-[#FFD700] text-[#FFD700]'
                        : 'fill-[#2A2A2A] text-[#2A2A2A]'
                    }`}
                  />
                ))}
              </div>
              <p className="text-white font-semibold">{rating.rating}</p>
              <p className="text-[#A0A0A0] text-sm">{rating.store}</p>
            </div>
          ))}
        </div>

        {/* Media Logos */}
        <div className="text-center">
          <p className="text-[#A0A0A0] mb-6">As featured in:</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {mediaLogos.map((logo, index) => (
              <div
                key={index}
                className="bg-[#141414] rounded-lg px-6 py-3 border border-[#2A2A2A] text-white opacity-60 hover:opacity-100 transition-opacity"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

