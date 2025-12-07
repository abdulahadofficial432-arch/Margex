import Link from 'next/link'
import { Book, Code, BarChart3, Users, Shield, Zap } from 'lucide-react'

const docCategories = [
  {
    icon: Book,
    title: 'Getting Started',
    description: 'Learn the basics of trading on Margex',
    links: [
      { name: 'Account Setup', href: '/docs/getting-started/account-setup' },
      { name: 'First Deposit', href: '/docs/getting-started/first-deposit' },
      { name: 'Placing Your First Trade', href: '/docs/getting-started/first-trade' },
    ],
  },
  {
    icon: BarChart3,
    title: 'Trading Guide',
    description: 'Master the art of cryptocurrency trading',
    links: [
      { name: 'Order Types', href: '/docs/trading/order-types' },
      { name: 'Leverage Trading', href: '/docs/trading/leverage' },
      { name: 'Risk Management', href: '/docs/trading/risk-management' },
      { name: 'Trading Strategies', href: '/docs/trading/strategies' },
    ],
  },
  {
    icon: Users,
    title: 'Copy Trading',
    description: 'Follow successful traders automatically',
    links: [
      { name: 'How Copy Trading Works', href: '/docs/copy-trading/overview' },
      { name: 'Finding Top Traders', href: '/docs/copy-trading/finding-traders' },
      { name: 'Setting Parameters', href: '/docs/copy-trading/parameters' },
      { name: 'Managing Copy Trades', href: '/docs/copy-trading/managing' },
    ],
  },
  {
    icon: Code,
    title: 'API Documentation',
    description: 'Integrate Margex into your applications',
    links: [
      { name: 'API Overview', href: '/docs/api/overview' },
      { name: 'Authentication', href: '/docs/api/authentication' },
      { name: 'REST API Reference', href: '/docs/api/rest' },
      { name: 'WebSocket API', href: '/docs/api/websocket' },
    ],
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Keep your account and funds secure',
    links: [
      { name: 'Two-Factor Authentication', href: '/docs/security/2fa' },
      { name: 'Account Security Best Practices', href: '/docs/security/best-practices' },
      { name: 'API Security', href: '/docs/security/api-security' },
    ],
  },
  {
    icon: Zap,
    title: 'Advanced Features',
    description: 'Explore advanced trading tools',
    links: [
      { name: 'Advanced Charting', href: '/docs/advanced/charting' },
      { name: 'Trading Bots', href: '/docs/advanced/bots' },
      { name: 'Portfolio Management', href: '/docs/advanced/portfolio' },
    ],
  },
]

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Documentation</h1>
          <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto">
            Comprehensive guides and references to help you get the most out of Margex.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search documentation..."
            className="w-full px-4 py-3 bg-[#141414] border border-[#1E1E1E] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#00D9FF] transition-colors"
          />
        </div>

        {/* Documentation Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-6 hover:border-[#00D9FF] transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#1E1E1E] rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#00D9FF]" />
                  </div>
                  <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                </div>
                <p className="text-[#A0A0A0] mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-[#00D9FF] hover:text-[#00B8D9] transition-colors text-sm"
                      >
                        → {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Quick Links */}
        <div className="mt-12 bg-[#141414] border border-[#1E1E1E] rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/support"
              className="p-4 bg-[#1E1E1E] rounded-lg hover:bg-[#2A2A2A] transition-colors"
            >
              <h3 className="text-white font-semibold mb-1">Need Help?</h3>
              <p className="text-sm text-[#A0A0A0]">Visit our support center</p>
            </Link>
            <Link
              href="/contact"
              className="p-4 bg-[#1E1E1E] rounded-lg hover:bg-[#2A2A2A] transition-colors"
            >
              <h3 className="text-white font-semibold mb-1">Contact Support</h3>
              <p className="text-sm text-[#A0A0A0]">Get in touch with our team</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

