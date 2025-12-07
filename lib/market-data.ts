// Market Data API Integration
// Using CoinGecko API (free tier) for real-time cryptocurrency data

export interface MarketData {
  id: string
  symbol: string
  name: string
  current_price: number
  price_change_24h: number
  price_change_percentage_24h: number
  high_24h: number
  low_24h: number
  total_volume: number
  market_cap: number
  image?: string
}

export interface TickerData {
  symbol: string
  price: string
  change: string
  changePercent: string
}

const COINGECKO_API = 'https://api.coingecko.com/api/v3'

// Fetch top cryptocurrencies by market cap
export async function getTopMarkets(limit: number = 50): Promise<MarketData[]> {
  try {
    const response = await fetch(
      `${COINGECKO_API}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false&price_change_percentage=24h`,
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch market data')
    }

    const data = await response.json()
    return data.map((coin: any) => ({
      id: coin.id,
      symbol: coin.symbol.toUpperCase(),
      name: coin.name,
      current_price: coin.current_price,
      price_change_24h: coin.price_change_24h || 0,
      price_change_percentage_24h: coin.price_change_percentage_24h || 0,
      high_24h: coin.high_24h,
      low_24h: coin.low_24h,
      total_volume: coin.total_volume,
      market_cap: coin.market_cap,
      image: coin.image,
    }))
  } catch (error) {
    console.error('Error fetching market data:', error)
    // Return mock data as fallback
    return getMockMarketData()
  }
}

// Fetch specific coin data
export async function getCoinData(coinId: string): Promise<MarketData | null> {
  try {
    const response = await fetch(
      `${COINGECKO_API}/coins/markets?vs_currency=usd&ids=${coinId}&sparkline=false`,
      {
        next: { revalidate: 30 },
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch coin data')
    }

    const data = await response.json()
    if (data.length === 0) return null

    const coin = data[0]
    return {
      id: coin.id,
      symbol: coin.symbol.toUpperCase(),
      name: coin.name,
      current_price: coin.current_price,
      price_change_24h: coin.price_change_24h || 0,
      price_change_percentage_24h: coin.price_change_percentage_24h || 0,
      high_24h: coin.high_24h,
      low_24h: coin.low_24h,
      total_volume: coin.total_volume,
      market_cap: coin.market_cap,
      image: coin.image,
    }
  } catch (error) {
    console.error('Error fetching coin data:', error)
    return null
  }
}

// Get ticker data for hero section
export async function getTickerData(): Promise<TickerData[]> {
  try {
    const coins = await getTopMarkets(4)
    return coins.map((coin) => ({
      symbol: `${coin.symbol}/USDT`,
      price: coin.current_price.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      change: coin.price_change_24h >= 0
        ? `+${coin.price_change_24h.toFixed(2)}`
        : coin.price_change_24h.toFixed(2),
      changePercent: coin.price_change_percentage_24h >= 0
        ? `+${coin.price_change_percentage_24h.toFixed(2)}%`
        : `${coin.price_change_percentage_24h.toFixed(2)}%`,
    }))
  } catch (error) {
    console.error('Error fetching ticker data:', error)
    return getMockTickerData()
  }
}

// Mock data fallback
function getMockMarketData(): MarketData[] {
  return [
    {
      id: 'bitcoin',
      symbol: 'BTC',
      name: 'Bitcoin',
      current_price: 43250.50,
      price_change_24h: 1250.30,
      price_change_percentage_24h: 2.98,
      high_24h: 44100.00,
      low_24h: 41800.00,
      total_volume: 2500000000,
      market_cap: 850000000000,
    },
    {
      id: 'ethereum',
      symbol: 'ETH',
      name: 'Ethereum',
      current_price: 2580.75,
      price_change_24h: 45.20,
      price_change_percentage_24h: 1.78,
      high_24h: 2650.00,
      low_24h: 2520.00,
      total_volume: 1800000000,
      market_cap: 310000000000,
    },
  ]
}

function getMockTickerData(): TickerData[] {
  return [
    { symbol: 'BTC/USDT', price: '43,250.50', change: '+1,250.30', changePercent: '+2.98%' },
    { symbol: 'ETH/USDT', price: '2,580.75', change: '+45.20', changePercent: '+1.78%' },
    { symbol: 'SOL/USDT', price: '98.45', change: '+2.15', changePercent: '+2.23%' },
    { symbol: 'XRP/USDT', price: '0.6250', change: '+0.0125', changePercent: '+2.04%' },
  ]
}

// Format large numbers
export function formatNumber(num: number): string {
  if (num >= 1e9) {
    return `$${(num / 1e9).toFixed(2)}B`
  }
  if (num >= 1e6) {
    return `$${(num / 1e6).toFixed(2)}M`
  }
  if (num >= 1e3) {
    return `$${(num / 1e3).toFixed(2)}K`
  }
  return `$${num.toFixed(2)}`
}

