import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-[#141414] border border-[#1E1E1E] rounded-lg p-6 ${
        hover ? 'hover:border-[#00D9FF] transition-colors' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

