'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CopyTrading() {
  const stats = [
    { value: '100+', label: 'Top Traders' },
    { value: '500k+', label: 'Copied Investors' },
    { value: '1 click', label: 'to start' },
  ]

  const traders = [
    { name: 'Trader Alpha', roi: '+245%', followers: '12.5k' },
    { name: 'Crypto Pro', roi: '+189%', followers: '8.9k' },
    { name: 'Bitcoin Master', roi: '+156%', followers: '6.2k' },
    { name: 'DeFi Expert', roi: '+134%', followers: '4.8k' },
  ]

  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Copy Trading: Let Top Traders Work for You
            </h2>
            <p className="text-xl text-[#A0A0A0] mb-8">
              Copy top-performing traders with a single click.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-[#141414] rounded-lg p-4 border border-[#2A2A2A] text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#00D9FF] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#A0A0A0]">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/copy-trading"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D9FF] text-black font-semibold rounded-lg hover:bg-[#00B8D9] transition-all text-lg"
            >
              Start Copy Trading
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Content - Mobile Phone Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Phone Frame */}
              <div className="relative bg-[#1A1A1A] rounded-[3rem] p-4 shadow-2xl border border-[#2A2A2A]">
                <div className="bg-[#0A0A0A] rounded-[2.5rem] overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="bg-[#0F1419] p-4 min-h-[500px]">
                    <div className="mb-4">
                      <h3 className="text-white font-semibold mb-4">Top Traders</h3>
                      <div className="space-y-3">
                        {traders.map((trader, index) => (
                          <div
                            key={index}
                            className="bg-[#141414] rounded-lg p-4 border border-[#2A2A2A]"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-white font-medium text-sm">{trader.name}</span>
                              <span className="text-[#00FF88] font-semibold text-sm">{trader.roi}</span>
                            </div>
                            <div className="text-xs text-[#A0A0A0]">
                              {trader.followers} followers
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Code Placeholder */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-xl">
                <div className="w-24 h-24 bg-[#0A0A0A] flex items-center justify-center">
                  <span className="text-xs text-white">QR Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Store Links */}
        <div className="flex justify-center gap-4 mt-20">
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
    </section>
  )
}

