'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function MoreThanTrading() {
  const [activeTab, setActiveTab] = useState<'copy' | 'staking' | 'referral' | 'promotions'>('copy')

  const tabs = [
    { id: 'copy' as const, label: 'Copy Trading' },
    { id: 'staking' as const, label: 'Staking' },
    { id: 'referral' as const, label: 'Referral Program' },
    { id: 'promotions' as const, label: 'Promotions' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#0F1419] to-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Margex is More than Just a Crypto Trading Platform
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#141414] rounded-lg p-1 border border-[#2A2A2A] overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-md font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#00D9FF] text-black'
                    : 'text-white hover:text-[#00D9FF]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-[#141414] rounded-lg border border-[#2A2A2A] p-8">
          {activeTab === 'copy' && (
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Copy trading: Top 5 Traders by ROI
                </h3>
                <p className="text-[#A0A0A0] mb-6">
                  Discover top-performing traders and automatically copy their trades to maximize your profits.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#1A1A1A] rounded-lg p-4 border border-[#2A2A2A]">
                    <div className="text-2xl font-bold text-[#00D9FF] mb-1">100+</div>
                    <div className="text-sm text-[#A0A0A0]">Top Traders</div>
                  </div>
                  <div className="bg-[#1A1A1A] rounded-lg p-4 border border-[#2A2A2A]">
                    <div className="text-2xl font-bold text-[#00D9FF] mb-1">500+</div>
                    <div className="text-sm text-[#A0A0A0]">Copied Investors</div>
                  </div>
                </div>
                <Link
                  href="/copy-trading"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#00D9FF] text-black font-semibold rounded-lg hover:bg-[#00B8D9] transition-all"
                >
                  See More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-[#1A1A1A] rounded-lg p-6 border border-[#2A2A2A]">
                {/* Performance Chart */}
                <div className="h-64 relative">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    {/* Grid lines */}
                    {[0, 50, 100, 150, 200].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={y}
                        x2="400"
                        y2={y}
                        stroke="#2A2A2A"
                        strokeWidth="1"
                      />
                    ))}
                    {/* Performance line (downward trend) */}
                    <polyline
                      points="20,20 80,40 140,60 200,80 260,100 320,120 380,140"
                      fill="none"
                      stroke="#FF4444"
                      strokeWidth="3"
                    />
                    {/* Data points */}
                    {[
                      { x: 20, y: 20 },
                      { x: 80, y: 40 },
                      { x: 140, y: 60 },
                      { x: 200, y: 80 },
                      { x: 260, y: 100 },
                      { x: 320, y: 120 },
                      { x: 380, y: 140 },
                    ].map((point, i) => (
                      <circle
                        key={i}
                        cx={point.x}
                        cy={point.y}
                        r="4"
                        fill="#FF4444"
                      />
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'staking' && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-white mb-4">Staking</h3>
              <p className="text-[#A0A0A0]">Earn passive income by staking your cryptocurrencies.</p>
            </div>
          )}

          {activeTab === 'referral' && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-white mb-4">Referral Program</h3>
              <p className="text-[#A0A0A0]">Invite friends and earn rewards together.</p>
            </div>
          )}

          {activeTab === 'promotions' && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-white mb-4">Promotions</h3>
              <p className="text-[#A0A0A0]">Check out our latest promotions and bonuses.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

