import { Download, Smartphone, Shield, Zap, Globe } from 'lucide-react'
import Link from 'next/link'

export default function MobilePage() {
  const features = [
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'Trade instantly with lightning-fast order execution on mobile.',
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'Bank-level security with biometric authentication and 2FA.',
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Trade from anywhere in the world, 24/7.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0A0A0A] to-[#141414] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Trade Crypto on the Go
              </h1>
              <p className="text-xl text-[#A0A0A0] mb-8">
                Full-featured trading platform in your pocket. Access all markets, place orders, and manage your portfolio from anywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-[#00D9FF] text-black rounded-lg hover:bg-[#00B8D9] transition-colors font-semibold"
                >
                  <Download className="w-5 h-5" />
                  Download for iOS
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-[#1E1E1E] border border-[#2A2A2A] text-white rounded-lg hover:border-[#00D9FF] transition-colors font-semibold"
                >
                  <Download className="w-5 h-5" />
                  Download for Android
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-[#141414] border border-[#1E1E1E] rounded-3xl p-8 shadow-2xl">
                  <div className="bg-[#0A0A0A] rounded-2xl aspect-[9/19] flex items-center justify-center">
                    <Smartphone className="w-32 h-32 text-[#00D9FF] opacity-50" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-[#00D9FF] rounded-3xl blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Mobile App Features</h2>
            <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto">
              Everything you need for professional trading, optimized for mobile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-6 text-center"
                >
                  <div className="w-16 h-16 bg-[#1E1E1E] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#00D9FF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-[#A0A0A0]">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">See It In Action</h2>
            <p className="text-xl text-[#A0A0A0]">
              Beautiful, intuitive interface designed for traders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg p-4">
                <div className="bg-[#0A0A0A] rounded-lg aspect-[9/19] flex items-center justify-center">
                  <span className="text-[#A0A0A0]">Screenshot {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Trading?</h2>
          <p className="text-xl text-[#A0A0A0] mb-8">
            Download the Margex mobile app and start trading cryptocurrencies today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-4 bg-[#00D9FF] text-black rounded-lg hover:bg-[#00B8D9] transition-colors font-semibold"
            >
              Get Started
            </a>
            <Link
              href="/markets"
              className="px-8 py-4 bg-transparent border-2 border-[#1E1E1E] text-white rounded-lg hover:border-[#00D9FF] transition-colors font-semibold"
            >
              View Markets
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

