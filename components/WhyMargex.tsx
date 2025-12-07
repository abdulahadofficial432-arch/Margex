'use client'

import { Coins, TrendingUp, Settings, Headphones } from 'lucide-react'

export default function WhyMargex() {
  const benefits = [
    {
      icon: Coins,
      title: 'Low Fees',
      description: 'Competitive trading fees to maximize your profits',
    },
    {
      icon: TrendingUp,
      title: 'High Liquidity',
      description: 'Trade with deep liquidity across all markets',
    },
    {
      icon: Settings,
      title: 'Advanced Tools',
      description: 'Professional trading tools and analytics',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support',
    },
  ]

  return (
    <section className="py-20 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Margex?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits List */}
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-[#141414] rounded-lg p-6 border border-[#2A2A2A] hover:border-[#00D9FF] transition-all group"
                >
                  <div className="w-12 h-12 bg-[#00D9FF]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00D9FF]/30 transition-colors">
                    <Icon className="w-6 h-6 text-[#00D9FF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-[#A0A0A0] text-sm">{benefit.description}</p>
                </div>
              )
            })}
          </div>

          {/* Trading Interface Visual with Connections */}
          <div className="relative">
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
                    </svg>
                  </div>
                </div>

                {/* Trading Tools */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#1A1A1A] rounded-lg p-4">
                    <div className="text-sm text-[#A0A0A0] mb-2">Order Book</div>
                    <div className="space-y-1">
                      {[67.2, 67.1, 67.0].map((price, i) => (
                        <div key={i} className="flex justify-between text-xs">
                          <span className="text-[#00FF88]">{price.toFixed(2)}</span>
                          <span className="text-white">0.{i + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#1A1A1A] rounded-lg p-4">
                    <div className="text-sm text-[#A0A0A0] mb-2">Recent Trades</div>
                    <div className="space-y-1">
                      {['67.2', '67.1', '67.0'].map((price, i) => (
                        <div key={i} className="flex justify-between text-xs">
                          <span className="text-white">{price}</span>
                          <span className="text-[#00FF88]">Buy</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Connection Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Connection lines from benefits to trading interface */}
                <line
                  x1="10"
                  y1="20"
                  x2="50"
                  y2="30"
                  stroke="#00D9FF"
                  strokeWidth="2"
                  opacity="0.3"
                  className="animate-pulse"
                />
                <line
                  x1="10"
                  y1="50"
                  x2="50"
                  y2="50"
                  stroke="#00FF88"
                  strokeWidth="2"
                  opacity="0.3"
                  className="animate-pulse"
                />
                <line
                  x1="10"
                  y1="80"
                  x2="50"
                  y2="70"
                  stroke="#00D9FF"
                  strokeWidth="2"
                  opacity="0.3"
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

