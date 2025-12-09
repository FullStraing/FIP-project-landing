import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { SolutionSection } from '@/components/sections/SolutionSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { AnalyticsSection } from '@/components/sections/AnalyticsSection'
import { SafetySection } from '@/components/sections/SafetySection'
import { AudienceSection } from '@/components/sections/AudienceSection'
import { FinalCtaSection } from '@/components/sections/FinalCtaSection'

export default function HomePage() {
  return (
    <main className="bg-brand-light text-brand-blue">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <AnalyticsSection />
      <SafetySection />
      <AudienceSection />
      <FinalCtaSection />
    </main>
  )
}
