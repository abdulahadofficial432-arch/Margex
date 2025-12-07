'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { useTickerData } from '@/hooks/useMarketData'

interface PriceTicker {
  symbol: string
  price: string
  change: string
  changePercent: string
}

export default function Hero() {
  const { tickers, loading } = useTickerData()
  const [tickerData, setTickerData] = useState<PriceTicker[]>([
    { symbol: 'BTC/USDT', price: '43,250.50', change: '+1,250.30', changePercent: '+2.98%' },
    { symbol: 'ETH/USDT', price: '2,580.75', change: '+45.20', changePercent: '+1.78%' },
    { symbol: 'SOL/USDT', price: '98.45', change: '+2.15', changePercent: '+2.23%' },
    { symbol: 'XRP/USDT', price: '0.6250', change: '+0.0125', changePercent: '+2.04%' },
  ])

  useEffect(() => {
    if (tickers.length > 0) {
      setTickerData(tickers)
    }
  }, [tickers])

  return (
    <section className="relative bg-gradient-to-b from-[#0A0A0A] to-[#141414] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D9FF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00D9FF] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Trade Crypto with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#00B8D9]">
              Up to 100x Leverage
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-[#A0A0A0] mb-8 max-w-3xl mx-auto">
            Advanced trading platform with professional tools, copy trading, and mobile apps.
            Start trading in minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/signup"
              className="px-8 py-4 bg-[#00D9FF] text-black rounded-lg hover:bg-[#00B8D9] transition-all font-semibold text-lg flex items-center gap-2 shadow-lg shadow-[#00D9FF]/20"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/markets"
              className="px-8 py-4 bg-transparent border-2 border-[#1E1E1E] text-white rounded-lg hover:border-[#00D9FF] transition-all font-semibold text-lg"
            >
              View Markets
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            <div>
              <div className="text-3xl font-bold text-[#00D9FF] mb-2">$2B+</div>
              <div className="text-sm text-[#A0A0A0]">Trading Volume</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#00D9FF] mb-2">500K+</div>
              <div className="text-sm text-[#A0A0A0]">Active Traders</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#00D9FF] mb-2">150+</div>
              <div className="text-sm text-[#A0A0A0]">Trading Pairs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#00D9FF] mb-2">24/7</div>
              <div className="text-sm text-[#A0A0A0]">Support</div>
            </div>
          </div>

          {/* Price Ticker */}
          <div className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-4 overflow-hidden">
            <div className="flex items-center justify-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-[#00D9FF]" />
              <span className="text-sm text-[#A0A0A0]">Live Prices</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {tickerData.map((ticker) => (
                <div key={ticker.symbol} className="flex items-center gap-2">
                  <span className="text-white font-medium">{ticker.symbol}</span>
                  <span className="text-white">${ticker.price}</span>
                  <span className="text-[#00FF88] text-sm">{ticker.changePercent}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

