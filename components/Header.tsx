'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigation = [
    { name: 'Markets', href: '/markets' },
    { name: 'Copy Trading', href: '/copy-trading', hasDropdown: true },
    { name: 'Products', href: '/products', hasDropdown: true },
    { name: 'About', href: '/about' },
    { name: 'Support', href: '/support' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-[#1E1E1E]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#00D9FF]">MARGEX</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-white hover:text-[#00D9FF] transition-colors flex items-center gap-1"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[#141414] border border-[#1E1E1E] rounded-lg shadow-xl py-2">
                    {/* Dropdown content will be added based on margex.com structure */}
                    <Link href={`${item.href}/leaderboard`} className="block px-4 py-2 text-sm text-white hover:bg-[#1E1E1E]">
                      Leaderboard
                    </Link>
                    <Link href={`${item.href}/strategies`} className="block px-4 py-2 text-sm text-white hover:bg-[#1E1E1E]">
                      Strategies
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-white hover:text-[#00D9FF] transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-[#00D9FF] text-black rounded-lg hover:bg-[#00B8D9] transition-colors font-medium"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#1E1E1E]">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-white hover:text-[#00D9FF] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 py-2 space-y-2">
              <Link
                href="/login"
                className="block px-4 py-2 text-center text-white border border-[#1E1E1E] rounded-lg hover:border-[#00D9FF] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="block px-4 py-2 text-center bg-[#00D9FF] text-black rounded-lg hover:bg-[#00B8D9] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

