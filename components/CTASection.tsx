'use client'

import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0F1419] to-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Trade at Ease, Start Your Crypto Journey Now!
        </h2>
        <Link
          href="/signup"
          className="inline-flex items-center px-8 py-4 bg-[#00D9FF] text-black font-semibold rounded-lg hover:bg-[#00B8D9] transition-all text-lg"
        >
          Start Trading
        </Link>
      </div>
    </section>
  )
}

