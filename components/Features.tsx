import { Shield, Zap, Users, Smartphone, BarChart3, Globe } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Secure Trading',
    description: 'Bank-level security with cold storage and multi-signature wallets. Your funds are protected.',
  },
  {
    icon: Zap,
    title: 'High Leverage',
    description: 'Trade with up to 100x leverage on major cryptocurrencies. Maximize your trading potential.',
  },
  {
    icon: Users,
    title: 'Copy Trading',
    description: 'Follow successful traders and automatically copy their strategies. Learn from the best.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Trade on the go with our iOS and Android apps. Full functionality wherever you are.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Charts',
    description: 'Professional TradingView charts with technical indicators and drawing tools.',
  },
  {
    icon: Globe,
    title: 'Global Access',
    description: 'Trade from anywhere in the world. Available in multiple languages and currencies.',
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Choose Margex?
          </h2>
          <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto">
            Everything you need for professional cryptocurrency trading in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-6 hover:border-[#00D9FF] transition-all group"
              >
                <div className="w-12 h-12 bg-[#1E1E1E] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00D9FF] transition-colors">
                  <Icon className="w-6 h-6 text-[#00D9FF] group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-[#A0A0A0]">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

