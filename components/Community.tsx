'use client'

import Link from 'next/link'
import { Twitter, MessageCircle, Users } from 'lucide-react'

export default function Community() {
  const socialLinks = [
    {
      icon: Twitter,
      name: 'Twitter',
      href: '#',
      color: 'text-[#1DA1F2]',
    },
    {
      icon: MessageCircle,
      name: 'Telegram',
      href: '#',
      color: 'text-[#0088CC]',
    },
    {
      icon: Users,
      name: 'Discord',
      href: '#',
      color: 'text-[#5865F2]',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#0F1419]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join the Margex Community of Traders
          </h2>
          <p className="text-xl text-[#A0A0A0]">
            Always here for you.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <Link
                key={index}
                href={social.href}
                className="group bg-[#141414] rounded-lg p-6 border border-[#2A2A2A] hover:border-[#00D9FF] transition-all min-w-[200px] text-center"
              >
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-4 group-hover:bg-[#00D9FF]/20 transition-colors`}>
                    <Icon className={`w-8 h-8 ${social.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{social.name}</h3>
                  <span className="px-6 py-2 bg-[#00D9FF] text-black rounded-lg font-medium text-sm group-hover:bg-[#00B8D9] transition-colors inline-block">
                    Join Now
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

