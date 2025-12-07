'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A0A0A] via-[#0F1419] to-[#0A0A0A] pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your{' '}
              <span className="text-[#00FF88]">Crypto</span>{' '}
              trading boutique
            </h1>
            <p className="text-xl md:text-2xl text-[#A0A0A0] mb-8">
              The safest and most reliable platform for digital assets.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D9FF] text-black font-semibold rounded-lg hover:bg-[#00B8D9] transition-all transform hover:scale-105 text-lg"
            >
              Start Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Content - Mobile Phone Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Phone Frame */}
              <div className="relative bg-[#1A1A1A] rounded-[3rem] p-4 shadow-2xl border border-[#2A2A2A]">
                <div className="bg-[#0A0A0A] rounded-[2.5rem] overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="bg-[#0F1419] p-4 min-h-[600px]">
                    {/* Trading Interface Mockup */}
                    <div className="space-y-4">
                      {/* Chart Area */}
                      <div className="bg-[#141414] rounded-lg p-4 h-48 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          {/* Candlestick Chart Visualization */}
                          <div className="w-full h-full relative">
                            {/* Chart Grid */}
                            <div className="absolute inset-0 opacity-20">
                              <div className="h-full border-t border-b border-[#2A2A2A]"></div>
                              <div className="w-full border-l border-r border-[#2A2A2A]"></div>
                            </div>
                            {/* Candlesticks */}
                            <svg className="w-full h-full" viewBox="0 0 200 100">
                              {/* Green candles */}
                              <rect x="20" y="30" width="8" height="40" fill="#00FF88" />
                              <rect x="35" y="25" width="8" height="45" fill="#00FF88" />
                              <rect x="50" y="20" width="8" height="50" fill="#00FF88" />
                              <rect x="65" y="35" width="8" height="35" fill="#00FF88" />
                              <rect x="80" y="15" width="8" height="55" fill="#00FF88" />
                              {/* Red candles */}
                              <rect x="95" y="60" width="8" height="30" fill="#FF4444" />
                              <rect x="110" y="70" width="8" height="20" fill="#FF4444" />
                              <rect x="125" y="65" width="8" height="25" fill="#FF4444" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-4 text-xs text-[#00FF88] font-semibold">
                          BTC/USDT
                        </div>
                        <div className="absolute bottom-2 right-4 text-xs text-white">
                          $67,234.56
                        </div>
                      </div>

                      {/* Order Book */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-[#141414] rounded-lg p-3">
                          <div className="text-xs text-[#A0A0A0] mb-2">Bids</div>
                          <div className="space-y-1">
                            {[67.2, 67.1, 67.0, 66.9, 66.8].map((price, i) => (
                              <div key={i} className="flex justify-between text-xs">
                                <span className="text-[#00FF88]">{price.toFixed(2)}</span>
                                <span className="text-white">0.{i + 1}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-[#141414] rounded-lg p-3">
                          <div className="text-xs text-[#A0A0A0] mb-2">Asks</div>
                          <div className="space-y-1">
                            {[67.3, 67.4, 67.5, 67.6, 67.7].map((price, i) => (
                              <div key={i} className="flex justify-between text-xs">
                                <span className="text-[#FF4444]">{price.toFixed(2)}</span>
                                <span className="text-white">0.{i + 1}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Trading Pairs List */}
                      <div className="bg-[#141414] rounded-lg p-3">
                        <div className="space-y-2">
                          {[
                            { pair: 'BTC/USDT', price: '67,234', change: '+1.2%', color: '#00FF88' },
                            { pair: 'ETH/USDT', price: '3,456', change: '+0.8%', color: '#00FF88' },
                            { pair: 'SOL/USDT', price: '98.45', change: '+2.1%', color: '#00FF88' },
                          ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center text-xs">
                              <span className="text-white font-medium">{item.pair}</span>
                              <span className="text-white">{item.price}</span>
                              <span className={`font-semibold`} style={{ color: item.color }}>
                                {item.change}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D9FF] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FF88] opacity-10 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
