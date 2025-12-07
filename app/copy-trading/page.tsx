'use client'

import { useState } from 'react'
import { TrendingUp, Users, DollarSign, Copy, Star } from 'lucide-react'

interface Trader {
  id: number
  name: string
  avatar: string
  totalReturn: string
  totalReturnPercent: string
  totalFollowers: number
  totalProfit: string
  winRate: string
  trades: number
  rating: number
  isFollowing: boolean
}

const traders: Trader[] = [
  {
    id: 1,
    name: 'CryptoMaster',
    avatar: '/avatars/trader1.jpg',
    totalReturn: '+$125,450',
    totalReturnPercent: '+245.50%',
    totalFollowers: 12500,
    totalProfit: '$2.5M',
    winRate: '78%',
    trades: 1245,
    rating: 4.9,
    isFollowing: false,
  },
  {
    id: 2,
    name: 'BitcoinWhale',
    avatar: '/avatars/trader2.jpg',
    totalReturn: '+$98,230',
    totalReturnPercent: '+198.30%',
    totalFollowers: 8900,
    totalProfit: '$1.8M',
    winRate: '72%',
    trades: 980,
    rating: 4.8,
    isFollowing: true,
  },
  {
    id: 3,
    name: 'EthereumPro',
    avatar: '/avatars/trader3.jpg',
    totalReturn: '+$76,540',
    totalReturnPercent: '+156.40%',
    totalFollowers: 6700,
    totalProfit: '$1.2M',
    winRate: '75%',
    trades: 756,
    rating: 4.7,
    isFollowing: false,
  },
  {
    id: 4,
    name: 'AltcoinKing',
    avatar: '/avatars/trader4.jpg',
    totalReturn: '+$65,320',
    totalReturnPercent: '+132.20%',
    totalFollowers: 5400,
    totalProfit: '$980K',
    winRate: '69%',
    trades: 623,
    rating: 4.6,
    isFollowing: false,
  },
]

export default function CopyTradingPage() {
  const [followedTraders, setFollowedTraders] = useState<number[]>(
    traders.filter(t => t.isFollowing).map(t => t.id)
  )

  const toggleFollow = (traderId: number) => {
    setFollowedTraders(prev =>
      prev.includes(traderId)
        ? prev.filter(id => id !== traderId)
        : [...prev, traderId]
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Copy Trading
          </h1>
          <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto">
            Follow successful traders and automatically copy their strategies. Learn from the best and grow your portfolio.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-[#1E1E1E] rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-[#00D9FF]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm text-[#A0A0A0]">Active Followers</div>
              </div>
            </div>
          </div>
          <div className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-[#1E1E1E] rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#00FF88]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">$15M+</div>
                <div className="text-sm text-[#A0A0A0]">Total Profits</div>
              </div>
            </div>
          </div>
          <div className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-[#1E1E1E] rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-[#00D9FF]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">250+</div>
                <div className="text-sm text-[#A0A0A0]">Top Traders</div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-6">
              <div className="w-12 h-12 bg-[#00D9FF] rounded-full flex items-center justify-center text-black font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Choose a Trader</h3>
              <p className="text-[#A0A0A0]">
                Browse our leaderboard and select traders based on their performance, win rate, and strategy.
              </p>
            </div>
            <div className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-6">
              <div className="w-12 h-12 bg-[#00D9FF] rounded-full flex items-center justify-center text-black font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Set Your Parameters</h3>
              <p className="text-[#A0A0A0]">
                Configure your copy trading settings: investment amount, leverage, and risk management.
              </p>
            </div>
            <div className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-6">
              <div className="w-12 h-12 bg-[#00D9FF] rounded-full flex items-center justify-center text-black font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Start Copying</h3>
              <p className="text-[#A0A0A0]">
                Your trades will automatically mirror the selected trader&apos;s positions in real-time.
              </p>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Top Traders</h2>
          <div className="bg-[#141414] border border-[#1E1E1E] rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1E1E1E]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Rank</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Trader</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-white">Total Return</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-white">Win Rate</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-white">Followers</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1E1E1E]">
                  {traders.map((trader, index) => (
                    <tr key={trader.id} className="hover:bg-[#1E1E1E] transition-colors">
                      <td className="px-6 py-4">
                        <div className="text-white font-bold">#{index + 1}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#2A2A2A] rounded-full flex items-center justify-center">
                            <span className="text-[#00D9FF] font-semibold">
                              {trader.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="text-white font-medium">{trader.name}</div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-[#FFAA00] text-[#FFAA00]" />
                              <span className="text-sm text-[#A0A0A0]">{trader.rating}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="text-[#00FF88] font-semibold">{trader.totalReturnPercent}</div>
                        <div className="text-sm text-[#A0A0A0]">{trader.totalReturn}</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="text-white font-medium">{trader.winRate}</div>
                        <div className="text-sm text-[#A0A0A0]">{trader.trades} trades</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="text-white">{trader.totalFollowers.toLocaleString()}</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => toggleFollow(trader.id)}
                          className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                            followedTraders.includes(trader.id)
                              ? 'bg-[#1E1E1E] text-[#00D9FF] border border-[#00D9FF]'
                              : 'bg-[#00D9FF] text-black hover:bg-[#00B8D9]'
                          }`}
                        >
                          <Copy className="w-4 h-4" />
                          {followedTraders.includes(trader.id) ? 'Following' : 'Follow'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

