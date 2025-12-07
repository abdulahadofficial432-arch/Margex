'use client'

import { useState } from 'react'
import { Search, ChevronDown, HelpCircle, MessageCircle, Book, Mail } from 'lucide-react'

const faqCategories = [
  {
    title: 'Getting Started',
    questions: [
      {
        q: 'How do I create an account?',
        a: 'Click the "Sign Up" button in the top right corner, enter your email and password, and verify your email address. The process takes just a few minutes.',
      },
      {
        q: 'What documents do I need for verification?',
        a: 'You\'ll need a government-issued ID (passport, driver\'s license, or national ID) and a proof of address document (utility bill or bank statement).',
      },
      {
        q: 'How do I deposit funds?',
        a: 'Go to your wallet, click "Deposit", select your preferred cryptocurrency, and follow the instructions. Deposits are usually processed within minutes.',
      },
    ],
  },
  {
    title: 'Trading',
    questions: [
      {
        q: 'What is leverage trading?',
        a: 'Leverage trading allows you to trade with more capital than you have in your account. For example, with 10x leverage, you can open a $10,000 position with just $1,000.',
      },
      {
        q: 'What is the maximum leverage?',
        a: 'The maximum leverage on Margex is 100x for major cryptocurrencies like Bitcoin and Ethereum. Leverage limits vary by trading pair.',
      },
      {
        q: 'How do I place an order?',
        a: 'Navigate to the trading page, select your trading pair, choose your order type (market or limit), set your leverage, enter the order size, and click "Buy" or "Sell".',
      },
    ],
  },
  {
    title: 'Copy Trading',
    questions: [
      {
        q: 'How does copy trading work?',
        a: 'Copy trading allows you to automatically replicate the trades of successful traders. You choose a trader to follow, set your investment amount and risk parameters, and their trades will be copied to your account.',
      },
      {
        q: 'Can I stop copying a trader?',
        a: 'Yes, you can stop copying a trader at any time. Go to your copy trading settings and click "Stop Copying". Your existing positions will remain open.',
      },
      {
        q: 'What fees are associated with copy trading?',
        a: 'Copy trading is free. You only pay the standard trading fees when trades are executed. Some traders may charge a performance fee, which will be clearly displayed.',
      },
    ],
  },
  {
    title: 'Security',
    questions: [
      {
        q: 'How secure is my account?',
        a: 'We use bank-level security including cold storage for funds, two-factor authentication (2FA), encryption, and regular security audits. Your funds are protected by industry-leading security measures.',
      },
      {
        q: 'How do I enable 2FA?',
        a: 'Go to your account settings, click on "Security", and enable two-factor authentication. You can use an authenticator app like Google Authenticator or Authy.',
      },
      {
        q: 'What should I do if I suspect unauthorized access?',
        a: 'Immediately change your password, enable 2FA if not already enabled, and contact our support team. We have 24/7 security monitoring to help protect your account.',
      },
    ],
  },
]

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const toggleCategory = (categoryTitle: string) => {
    setOpenCategory(openCategory === categoryTitle ? null : categoryTitle)
  }

  const toggleQuestion = (questionKey: string) => {
    setOpenQuestion(openQuestion === questionKey ? null : questionKey)
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Help Center</h1>
          <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto">
            Find answers to common questions or contact our support team.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A0A0A0]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-4 bg-[#141414] border border-[#1E1E1E] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#00D9FF] transition-colors"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a
            href="#faq"
            className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-6 hover:border-[#00D9FF] transition-colors"
          >
            <HelpCircle className="w-8 h-8 text-[#00D9FF] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">FAQ</h3>
            <p className="text-[#A0A0A0]">Browse frequently asked questions</p>
          </a>
          <a
            href="/docs"
            className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-6 hover:border-[#00D9FF] transition-colors"
          >
            <Book className="w-8 h-8 text-[#00D9FF] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Documentation</h3>
            <p className="text-[#A0A0A0]">Read our comprehensive guides</p>
          </a>
          <a
            href="#contact"
            className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-6 hover:border-[#00D9FF] transition-colors"
          >
            <Mail className="w-8 h-8 text-[#00D9FF] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Contact Us</h3>
            <p className="text-[#A0A0A0]">Get in touch with support</p>
          </a>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqCategories.map((category) => (
              <div
                key={category.title}
                className="bg-[#141414] border border-[#1E1E1E] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#1E1E1E] transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#A0A0A0] transition-transform ${
                      openCategory === category.title ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openCategory === category.title && (
                  <div className="px-6 py-4 space-y-4">
                    {category.questions.map((item, index) => {
                      const questionKey = `${category.title}-${index}`
                      return (
                        <div key={index} className="border-t border-[#1E1E1E] pt-4 first:border-t-0 first:pt-0">
                          <button
                            onClick={() => toggleQuestion(questionKey)}
                            className="w-full flex items-center justify-between text-left"
                          >
                            <h4 className="text-white font-medium pr-4">{item.q}</h4>
                            <ChevronDown
                              className={`w-5 h-5 text-[#A0A0A0] flex-shrink-0 transition-transform ${
                                openQuestion === questionKey ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {openQuestion === questionKey && (
                            <p className="mt-2 text-[#A0A0A0]">{item.a}</p>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-[#141414] border border-[#1E1E1E] rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
          <p className="text-[#A0A0A0] mb-6">
            Our support team is available 24/7 to assist you. Get in touch via email or live chat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:support@margex.com"
              className="px-6 py-3 bg-[#00D9FF] text-black rounded-lg hover:bg-[#00B8D9] transition-colors font-semibold text-center"
            >
              Email Support
            </a>
            <button className="px-6 py-3 bg-[#1E1E1E] border border-[#2A2A2A] text-white rounded-lg hover:border-[#00D9FF] transition-colors font-semibold">
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

