'use client'

import { useState } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

export default function TradingOpportunity() {
  const [activeTab, setActiveTab] = useState<'spot' | 'futures'>('spot')

  const tradingPairs = [
    { pair: 'BTC/USDT', price: '67,000', change: '+1.2%', isPositive: true },
    { pair: 'ETH/USDT', price: '3,500', change: '+0.8%', isPositive: true },
    { pair: 'SOL/USDT', price: '98.45', change: '+2.1%', isPositive: true },
    { pair: 'BNB/USDT', price: '312.50', change: '-0.4%', isPositive: false },
    { pair: 'XRP/USDT', price: '0.6250', change: '+1.5%', isPositive: true },
    { pair: 'ADA/USDT', price: '0.4850', change: '+0.3%', isPositive: true },
    { pair: 'DOGE/USDT', price: '0.0820', change: '-0.4%', isPositive: false },
    { pair: 'MATIC/USDT', price: '0.8920', change: '+1.1%', isPositive: true },
  ]

  const topGainers = [
    { pair: 'SOL/USDT', change: '+2.1%' },
    { pair: 'XRP/USDT', change: '+1.5%' },
    { pair: 'BTC/USDT', change: '+1.2%' },
  ]

  const topLosers = [
    { pair: 'DOGE/USDT', change: '-0.4%' },
    { pair: 'BNB/USDT', change: '-0.4%' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#0F1419]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Trading Opportunity
          </h2>
          <p className="text-xl text-[#A0A0A0]">
            Discover opportunities to trade with over 100 assets and pairs.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-[#141414] rounded-lg p-1 border border-[#2A2A2A]">
            <button
              onClick={() => setActiveTab('spot')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'spot'
                  ? 'bg-[#00D9FF] text-black'
                  : 'text-white hover:text-[#00D9FF]'
              }`}
            >
              Spot Trading
            </button>
            <button
              onClick={() => setActiveTab('futures')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'futures'
                  ? 'bg-[#00D9FF] text-black'
                  : 'text-white hover:text-[#00D9FF]'
              }`}
            >
              Futures Trading
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Trading Pairs Table */}
          <div className="lg:col-span-3">
            <div className="bg-[#141414] rounded-lg border border-[#2A2A2A] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#1A1A1A] border-b border-[#2A2A2A]">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Trading Pair</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Price</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">24h Change</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Chart</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tradingPairs.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-[#2A2A2A] hover:bg-[#1A1A1A] transition-colors"
                      >
                        <td className="px-6 py-4 text-white font-medium">{item.pair}</td>
                        <td className="px-6 py-4 text-white">{item.price}</td>
                        <td className={`px-6 py-4 font-semibold ${item.isPositive ? 'text-[#00FF88]' : 'text-[#FF4444]'}`}>
                          {item.change}
                        </td>
                        <td className="px-6 py-4">
                          <div className="w-16 h-8 relative">
                            <svg className="w-full h-full" viewBox="0 0 64 32">
                              <polyline
                                points={item.isPositive ? "4,28 16,20 28,12 40,8 52,4 60,2" : "4,4 16,8 28,12 40,16 52,20 60,24"}
                                fill="none"
                                stroke={item.isPositive ? '#00FF88' : '#FF4444'}
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <button className="px-4 py-2 bg-[#00D9FF] text-black rounded-lg hover:bg-[#00B8D9] transition-colors font-medium text-sm">
                            Buy
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Top Gainers and Losers */}
          <div className="space-y-6">
            {/* Top Gainers */}
            <div className="bg-[#141414] rounded-lg border border-[#2A2A2A] p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-[#00FF88]" />
                <h3 className="text-lg font-semibold text-white">Top Gainers</h3>
              </div>
              <div className="space-y-3">
                {topGainers.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white text-sm">{item.pair}</span>
                    <span className="text-[#00FF88] font-semibold text-sm">{item.change}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Losers */}
            <div className="bg-[#141414] rounded-lg border border-[#2A2A2A] p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown className="w-5 h-5 text-[#FF4444]" />
                <h3 className="text-lg font-semibold text-white">Top Losers</h3>
              </div>
              <div className="space-y-3">
                {topLosers.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white text-sm">{item.pair}</span>
                    <span className="text-[#FF4444] font-semibold text-sm">{item.change}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

