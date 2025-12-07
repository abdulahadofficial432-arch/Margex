import { Target, Users, Award, Globe } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To democratize cryptocurrency trading by providing professional-grade tools and services to traders of all levels.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A global team of experienced traders, developers, and financial experts dedicated to building the best trading platform.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from platform security to customer support.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving traders worldwide with localized support and multiple language options.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">About Margex</h1>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
            We're building the future of cryptocurrency trading with innovative tools, 
            professional-grade security, and a commitment to trader success.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-[#A0A0A0]">
                <p>
                  Margex was founded with a simple mission: to make professional cryptocurrency trading 
                  accessible to everyone. We recognized that existing platforms were either too complex 
                  for beginners or lacked the advanced features that experienced traders need.
                </p>
                <p>
                  Since our launch, we've grown to serve hundreds of thousands of traders worldwide, 
                  processing billions in trading volume. Our platform combines cutting-edge technology 
                  with intuitive design, making it easy for anyone to start trading while providing 
                  the tools professionals demand.
                </p>
                <p>
                  Today, Margex is recognized as one of the leading cryptocurrency trading platforms, 
                  known for our security, reliability, and innovative features like copy trading and 
                  advanced charting tools.
                </p>
              </div>
            </div>
            <div className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-[#00D9FF] mb-2">500K+</div>
                  <div className="text-sm text-[#A0A0A0]">Active Traders</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#00D9FF] mb-2">$2B+</div>
                  <div className="text-sm text-[#A0A0A0]">Trading Volume</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#00D9FF] mb-2">150+</div>
                  <div className="text-sm text-[#A0A0A0]">Trading Pairs</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#00D9FF] mb-2">24/7</div>
                  <div className="text-sm text-[#A0A0A0]">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-6 text-center"
                >
                  <div className="w-16 h-16 bg-[#1E1E1E] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#00D9FF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-[#A0A0A0]">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['CEO', 'CTO', 'Head of Trading'].map((role, index) => (
              <div key={index} className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-[#1E1E1E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-[#00D9FF] font-semibold">
                    {role.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">Team Member</h3>
                <p className="text-[#A0A0A0]">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

