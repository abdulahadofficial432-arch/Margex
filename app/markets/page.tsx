'use client'

import { useState } from 'react'
import { TrendingUp, TrendingDown, Search } from 'lucide-react'
import { useMarketData } from '@/hooks/useMarketData'
import { formatNumber } from '@/lib/market-data'

interface Market {
  symbol: string
  name: string
  price: string
  change24h: string
  changePercent24h: string
  volume24h: string
  high24h: string
  low24h: string
}

const markets: Market[] = [
  { symbol: 'BTC/USDT', name: 'Bitcoin', price: '43,250.50', change24h: '+1,250.30', changePercent24h: '+2.98%', volume24h: '$2.5B', high24h: '44,100.00', low24h: '41,800.00' },
  { symbol: 'ETH/USDT', name: 'Ethereum', price: '2,580.75', change24h: '+45.20', changePercent24h: '+1.78%', volume24h: '$1.8B', high24h: '2,650.00', low24h: '2,520.00' },
  { symbol: 'SOL/USDT', name: 'Solana', price: '98.45', change24h: '+2.15', changePercent24h: '+2.23%', volume24h: '$450M', high24h: '102.00', low24h: '95.20' },
  { symbol: 'XRP/USDT', name: 'Ripple', price: '0.6250', change24h: '+0.0125', changePercent24h: '+2.04%', volume24h: '$320M', high24h: '0.6400', low24h: '0.6100' },
  { symbol: 'ADA/USDT', name: 'Cardano', price: '0.4850', change24h: '-0.0050', changePercent24h: '-1.02%', volume24h: '$180M', high24h: '0.5000', low24h: '0.4700' },
  { symbol: 'DOGE/USDT', name: 'Dogecoin', price: '0.0850', change24h: '+0.0025', changePercent24h: '+3.03%', volume24h: '$150M', high24h: '0.0880', low24h: '0.0820' },
]

export default function MarketsPage() {
  const { markets: marketData, loading } = useMarketData()
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'price' | 'change' | 'volume'>('volume')

  // Convert MarketData to Market format
  const markets = marketData.map((m) => ({
    symbol: `${m.symbol}/USDT`,
    name: m.name,
    price: m.current_price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    change24h: m.price_change_24h >= 0 ? `+${m.price_change_24h.toFixed(2)}` : m.price_change_24h.toFixed(2),
    changePercent24h: m.price_change_percentage_24h >= 0 ? `+${m.price_change_percentage_24h.toFixed(2)}%` : `${m.price_change_percentage_24h.toFixed(2)}%`,
    volume24h: formatNumber(m.total_volume),
    high24h: m.high_24h.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    low24h: m.low_24h.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
  }))

  const filteredMarkets = markets.filter(market =>
    market.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    market.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const sortedMarkets = [...filteredMarkets].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(b.price.replace(/,/g, '')) - parseFloat(a.price.replace(/,/g, ''))
      case 'change':
        return parseFloat(b.changePercent24h.replace(/[+%]/g, '')) - parseFloat(a.changePercent24h.replace(/[+%]/g, ''))
      case 'volume':
        return parseFloat(b.volume24h.replace(/[$BM]/g, '')) - parseFloat(a.volume24h.replace(/[$BM]/g, ''))
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Markets</h1>
          <p className="text-[#A0A0A0]">Trade cryptocurrencies with up to 100x leverage</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A0A0A0]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search markets..."
              className="w-full pl-10 pr-4 py-3 bg-[#141414] border border-[#1E1E1E] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#00D9FF] transition-colors"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSortBy('volume')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                sortBy === 'volume'
                  ? 'bg-[#00D9FF] text-black'
                  : 'bg-[#141414] text-white border border-[#1E1E1E] hover:border-[#00D9FF]'
              }`}
            >
              Volume
            </button>
            <button
              onClick={() => setSortBy('change')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                sortBy === 'change'
                  ? 'bg-[#00D9FF] text-black'
                  : 'bg-[#141414] text-white border border-[#1E1E1E] hover:border-[#00D9FF]'
              }`}
            >
              Change
            </button>
            <button
              onClick={() => setSortBy('price')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                sortBy === 'price'
                  ? 'bg-[#00D9FF] text-black'
                  : 'bg-[#141414] text-white border border-[#1E1E1E] hover:border-[#00D9FF]'
              }`}
            >
              Price
            </button>
          </div>
        </div>

        {/* Markets Table */}
        <div className="bg-[#141414] border border-[#1E1E1E] rounded-lg overflow-hidden">
          {loading ? (
            <div className="p-12 text-center">
              <div className="text-[#A0A0A0]">Loading market data...</div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
              <thead className="bg-[#1E1E1E]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Pair</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-white">Price</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-white">24h Change</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-white">24h High</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-white">24h Low</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-white">24h Volume</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E1E1E]">
                {sortedMarkets.map((market) => {
                  const isPositive = market.changePercent24h.startsWith('+')
                  return (
                    <tr key={market.symbol} className="hover:bg-[#1E1E1E] transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-white font-medium">{market.symbol}</div>
                          <div className="text-sm text-[#A0A0A0]">{market.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right text-white font-medium">
                        ${market.price}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className={`flex items-center justify-end gap-1 ${isPositive ? 'text-[#00FF88]' : 'text-[#FF4444]'}`}>
                          {isPositive ? (
                            <TrendingUp className="w-4 h-4" />
                          ) : (
                            <TrendingDown className="w-4 h-4" />
                          )}
                          <span className="font-medium">{market.changePercent24h}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right text-white">${market.high24h}</td>
                      <td className="px-6 py-4 text-right text-white">${market.low24h}</td>
                      <td className="px-6 py-4 text-right text-[#A0A0A0]">{market.volume24h}</td>
                      <td className="px-6 py-4 text-center">
                        <button className="px-4 py-2 bg-[#00D9FF] text-black rounded-lg hover:bg-[#00B8D9] transition-colors font-medium text-sm">
                          Trade
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

