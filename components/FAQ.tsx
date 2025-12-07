'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What is Margex?',
      answer: 'Margex is a leading cryptocurrency trading platform that offers spot trading, futures trading, and copy trading features. We provide a secure and reliable environment for trading digital assets.',
    },
    {
      question: 'How do I buy Bitcoin or other cryptocurrency on Margex?',
      answer: 'To buy cryptocurrency on Margex, first create an account and complete the verification process. Then, deposit funds into your account and navigate to the trading section to place your buy orders.',
    },
    {
      question: 'How do you protect users\' funds?',
      answer: 'We use industry-leading security measures including cold storage for the majority of funds, two-factor authentication, encryption, and regular security audits to ensure your funds are protected.',
    },
    {
      question: 'I need help and want to chat with a real person.',
      answer: 'Our 24/7 support team is available to assist you. You can reach us through live chat on the platform, email support, or through our social media channels.',
    },
  ]

  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Got Questions?
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#141414] rounded-lg border border-[#2A2A2A] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#1A1A1A] transition-colors"
              >
                <span className="text-white font-semibold text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#00D9FF] transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-[#2A2A2A]">
                  <p className="text-[#A0A0A0]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

