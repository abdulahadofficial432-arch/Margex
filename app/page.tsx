import Hero from '@/components/Hero'
import TradingEasy from '@/components/TradingEasy'
import TradingOpportunity from '@/components/TradingOpportunity'
import CopyTrading from '@/components/CopyTrading'
import MoreThanTrading from '@/components/MoreThanTrading'
import WhyMargex from '@/components/WhyMargex'
import Community from '@/components/Community'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <TradingEasy />
      <TradingOpportunity />
      <CopyTrading />
      <MoreThanTrading />
      <WhyMargex />
      <Community />
      <TestimonialsSection />
      <CTASection />
      <FAQ />
    </>
  )
}

