'use client'

import { useEffect, useRef } from 'react'

interface TradingViewWidgetProps {
  symbol?: string
  height?: number
  theme?: 'dark' | 'light'
}

export default function TradingViewWidget({
  symbol = 'BINANCE:BTCUSDT',
  height = 600,
  theme = 'dark',
}: TradingViewWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Clear previous content
    containerRef.current.innerHTML = ''

    // Create TradingView widget script
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/tv.js'
    script.async = true
    script.onload = () => {
      if (window.TradingView && containerRef.current) {
        new window.TradingView.widget({
          autosize: true,
          symbol: symbol,
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: theme,
          style: '1',
          locale: 'en',
          toolbar_bg: '#1E1E1E',
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: containerRef.current.id,
          height: height,
          width: '100%',
          hide_side_toolbar: false,
          studies: [
            'Volume@tv-basicstudies',
            'MACD@tv-basicstudies',
            'RSI@tv-basicstudies',
          ],
        })
      }
    }

    document.body.appendChild(script)

    return () => {
      // Cleanup
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [symbol, height, theme])

  return (
    <div className="w-full">
      <div
        id="tradingview-widget"
        ref={containerRef}
        className="tradingview-widget-container"
        style={{ height: `${height}px` }}
      />
    </div>
  )
}

// Extend Window interface for TradingView
declare global {
  interface Window {
    TradingView: any
  }
}

