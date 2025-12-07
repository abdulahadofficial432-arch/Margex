'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { useMarketData } from '@/hooks/useMarketData'
import { formatNumber } from '@/lib/market-data'

export const dynamic = 'force-dynamic'

export default function DashboardPage() {
  const router = useRouter()
  const { user, loading: authLoading, isAuthenticated } = useAuth()
  const { markets, loading: marketsLoading } = useMarketData()

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login')
    }
  }, [authLoading, isAuthenticated, router])

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">
          Welcome back, {user?.email}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-6">
            <div className="text-[#A0A0A0] text-sm mb-2">Portfolio Value</div>
            <div className="text-3xl font-bold text-white">$0.00</div>
          </div>
          <div className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-6">
            <div className="text-[#A0A0A0] text-sm mb-2">24h Change</div>
            <div className="text-3xl font-bold text-[#00FF88]">+0.00%</div>
          </div>
          <div className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-6">
            <div className="text-[#A0A0A0] text-sm mb-2">Active Positions</div>
            <div className="text-3xl font-bold text-white">0</div>
          </div>
        </div>

        <div className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Top Markets</h2>
          {marketsLoading ? (
            <div className="text-[#A0A0A0]">Loading markets...</div>
          ) : (
            <div className="space-y-2">
              {markets.slice(0, 5).map((market) => (
                <div
                  key={market.id}
                  className="flex items-center justify-between p-3 bg-[#1E1E1E] rounded-lg"
                >
                  <div>
                    <div className="text-white font-medium">{market.symbol}/USDT</div>
                    <div className="text-sm text-[#A0A0A0]">{market.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">
                      ${market.current_price.toLocaleString()}
                    </div>
                    <div
                      className={`text-sm ${
                        market.price_change_percentage_24h >= 0
                          ? 'text-[#00FF88]'
                          : 'text-[#FF4444]'
                      }`}
                    >
                      {market.price_change_percentage_24h >= 0 ? '+' : ''}
                      {market.price_change_percentage_24h.toFixed(2)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

