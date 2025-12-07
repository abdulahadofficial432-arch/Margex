'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function TradingEasy() {
  const stats = [
    { value: '500k+', label: 'Registered users' },
    { value: '180k+', label: 'Daily volume' },
    { value: '0', label: 'Client funds lost' },
    { value: '153', label: 'Countries served' },
  ]

  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We made crypto trading easy
          </h2>
          <p className="text-xl text-[#A0A0A0]">
            Trade with confidence, liquidity, tools, transparency, and security.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Trading Interface Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-[#141414] rounded-2xl p-6 border border-[#2A2A2A] shadow-2xl">
              {/* Desktop Trading Interface Mockup */}
              <div className="space-y-4">
                {/* Chart Area */}
                <div className="bg-[#0F1419] rounded-lg p-4 h-64 relative overflow-hidden">
                  <div className="absolute inset-0">
                    {/* Chart Grid */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="h-full border-t border-b border-[#2A2A2A]"></div>
                      <div className="w-full border-l border-r border-[#2A2A2A]"></div>
                    </div>
                    {/* Candlestick Chart */}
                    <svg className="w-full h-full" viewBox="0 0 400 200">
                      {/* Green candles */}
                      {[20, 40, 60, 80, 100, 120, 140, 160, 180, 200].map((x, i) => (
                        <rect
                          key={i}
                          x={x}
                          y={80 - i * 3}
                          width="12"
                          height={40 + i * 2}
                          fill="#00FF88"
                          opacity={0.8}
                        />
                      ))}
                      {/* Highlight Circle */}
                      <circle cx="140" cy="50" r="8" fill="#00FF88" className="animate-pulse">
                        <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  </div>
                  <div className="absolute bottom-4 left-4 text-sm text-[#00FF88] font-semibold">
                    BTC/USDT
                  </div>
                  <div className="absolute bottom-4 right-4 text-sm text-white">
                    $67,234.56
                  </div>
                </div>

                {/* Order Book */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#1A1A1A] rounded-lg p-4">
                    <div className="text-sm text-[#A0A0A0] mb-3">Bids</div>
                    <div className="space-y-2">
                      {[67.2, 67.1, 67.0, 66.9, 66.8].map((price, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <span className="text-[#00FF88]">{price.toFixed(2)}</span>
                          <span className="text-white">0.{i + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#1A1A1A] rounded-lg p-4">
                    <div className="text-sm text-[#A0A0A0] mb-3">Asks</div>
                    <div className="space-y-2">
                      {[67.3, 67.4, 67.5, 67.6, 67.7].map((price, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <span className="text-[#FF4444]">{price.toFixed(2)}</span>
                          <span className="text-white">0.{i + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-[#141414] rounded-lg p-6 border border-[#2A2A2A]">
                  <div className="text-3xl md:text-4xl font-bold text-[#00D9FF] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#A0A0A0]">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/trading"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00D9FF] text-black font-semibold rounded-lg hover:bg-[#00B8D9] transition-all"
              >
                Continue trading
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-[#00D9FF] border border-[#00D9FF] rounded-lg hover:bg-[#00D9FF]/10 transition-all"
              >
                Further Overview
              </Link>
            </div>

            {/* App Store Links */}
            <div className="flex gap-4 mt-8">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <div className="bg-white rounded-lg p-2 w-32 h-10 flex items-center justify-center">
                  <span className="text-xs text-black font-semibold">App Store</span>
                </div>
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <div className="bg-white rounded-lg p-2 w-32 h-10 flex items-center justify-center">
                  <span className="text-xs text-black font-semibold">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

