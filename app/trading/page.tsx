'use client'

import { useState } from 'react'
import TradingViewWidget from '@/components/TradingViewWidget'
import { TrendingUp, TrendingDown } from 'lucide-react'

export default function TradingPage() {
  const [selectedSymbol, setSelectedSymbol] = useState('BINANCE:BTCUSDT')
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy')
  const [leverage, setLeverage] = useState(10)
  const [orderSize, setOrderSize] = useState('')
  const [orderPrice, setOrderPrice] = useState('')

  const symbols = [
    { value: 'BINANCE:BTCUSDT', label: 'BTC/USDT' },
    { value: 'BINANCE:ETHUSDT', label: 'ETH/USDT' },
    { value: 'BINANCE:SOLUSDT', label: 'SOL/USDT' },
    { value: 'BINANCE:XRPUSDT', label: 'XRP/USDT' },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="flex flex-col lg:flex-row h-screen pt-16">
        {/* Trading Chart */}
        <div className="flex-1 flex flex-col">
          {/* Chart Header */}
          <div className="bg-[#141414] border-b border-[#1E1E1E] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <select
                value={selectedSymbol}
                onChange={(e) => setSelectedSymbol(e.target.value)}
                className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00D9FF]"
              >
                {symbols.map((sym) => (
                  <option key={sym.value} value={sym.value}>
                    {sym.label}
                  </option>
                ))}
              </select>
              <div className="text-white">
                <span className="text-2xl font-bold">$43,250.50</span>
                <span className="ml-2 text-[#00FF88] text-sm">+2.98%</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 bg-[#1E1E1E] text-white rounded text-sm hover:bg-[#2A2A2A]">
                1D
              </button>
              <button className="px-3 py-1 bg-[#00D9FF] text-black rounded text-sm">
                1W
              </button>
              <button className="px-3 py-1 bg-[#1E1E1E] text-white rounded text-sm hover:bg-[#2A2A2A]">
                1M
              </button>
            </div>
          </div>

          {/* Chart */}
          <div className="flex-1 bg-[#141414]">
            <TradingViewWidget symbol={selectedSymbol} height={600} theme="dark" />
          </div>
        </div>

        {/* Order Panel */}
        <div className="w-full lg:w-96 bg-[#141414] border-l border-[#1E1E1E] p-6 overflow-y-auto">
          <h2 className="text-xl font-bold text-white mb-6">Place Order</h2>

          {/* Order Type Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setOrderType('buy')}
              className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                orderType === 'buy'
                  ? 'bg-[#00FF88] text-black'
                  : 'bg-[#1E1E1E] text-white hover:bg-[#2A2A2A]'
              }`}
            >
              Buy
            </button>
            <button
              onClick={() => setOrderType('sell')}
              className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                orderType === 'sell'
                  ? 'bg-[#FF4444] text-white'
                  : 'bg-[#1E1E1E] text-white hover:bg-[#2A2A2A]'
              }`}
            >
              Sell
            </button>
          </div>

          {/* Leverage Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-white mb-2">
              Leverage: {leverage}x
            </label>
            <input
              type="range"
              min="1"
              max="100"
              value={leverage}
              onChange={(e) => setLeverage(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-[#A0A0A0] mt-1">
              <span>1x</span>
              <span>50x</span>
              <span>100x</span>
            </div>
          </div>

          {/* Order Size */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-2">Order Size (USDT)</label>
            <input
              type="number"
              value={orderSize}
              onChange={(e) => setOrderSize(e.target.value)}
              placeholder="0.00"
              className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#00D9FF]"
            />
          </div>

          {/* Order Price */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-2">Price (USDT)</label>
            <input
              type="number"
              value={orderPrice}
              onChange={(e) => setOrderPrice(e.target.value)}
              placeholder="Market Price"
              className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#00D9FF]"
            />
          </div>

          {/* Order Summary */}
          <div className="bg-[#1E1E1E] rounded-lg p-4 mb-6">
            <div className="flex justify-between text-sm text-[#A0A0A0] mb-2">
              <span>Estimated Cost</span>
              <span className="text-white">$0.00</span>
            </div>
            <div className="flex justify-between text-sm text-[#A0A0A0] mb-2">
              <span>Leverage</span>
              <span className="text-white">{leverage}x</span>
            </div>
            <div className="flex justify-between text-sm text-[#A0A0A0]">
              <span>Margin Required</span>
              <span className="text-white">$0.00</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors ${
              orderType === 'buy'
                ? 'bg-[#00FF88] text-black hover:bg-[#00E677]'
                : 'bg-[#FF4444] text-white hover:bg-[#E63333]'
            }`}
          >
            {orderType === 'buy' ? 'Buy' : 'Sell'} {symbols.find(s => s.value === selectedSymbol)?.label}
          </button>

          {/* Risk Warning */}
          <p className="mt-4 text-xs text-[#A0A0A0] text-center">
            Trading with leverage involves significant risk. Only trade with funds you can afford to lose.
          </p>
        </div>
      </div>
    </div>
  )
}

