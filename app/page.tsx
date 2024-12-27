'use client'
import CTASection from "@/components/commons/CTASection";
import FeatureSection from "@/components/commons/FeatureSection";
import HeroSection from "@/components/commons/HeroSection";
import HowItsWork from "@/components/commons/HowItsWork";
import PublicLayout from "@/components/commons/PublicLayout";
import TemplateSection from "@/components/commons/TemplateSection";
import TestimonialsSection from "@/components/commons/TestimonialsSection";


export default function Home() {
  return (
    <PublicLayout>
      <HeroSection />
      <TemplateSection />
      <FeatureSection />
      <HowItsWork />
      <TestimonialsSection />
      <CTASection />
    </PublicLayout>
  )
}
