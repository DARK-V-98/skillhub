
'use client';
import { HeroSection } from '@/components/home/hero-section';
import { FeaturesSection } from '@/components/home/features-section';
import { RolesSection } from '@/components/home/roles-section';
import { AccessibilitySection } from '@/components/home/accessibility-section';
import { CtaSection } from '@/components/home/cta-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <RolesSection />
      <AccessibilitySection />
      <CtaSection />
    </>
  );
}
