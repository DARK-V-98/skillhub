
'use client';
import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { placeholderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Video } from 'lucide-react';

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);
  const heroImage = placeholderImages.find(p => p.id === 'hero');

  return (
    <section
      ref={ref}
      className="relative pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background -z-10"></div>
      <div className="absolute inset-x-0 top-0 h-[500px] w-full bg-[url('/wavy-grid.svg')] bg-cover bg-center bg-repeat-x opacity-20 -z-10"></div>
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div
          className={`text-center md:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <p className="inline-block bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm mb-4">
            Empowering Education for Everyone
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Empowering Education for{' '}
            <span className="text-sky-500">Everyone</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:mx-0">
            Bridge education gaps with our AI-powered, live teaching tools. Launch
            your own courses, engage with a global community, and unlock new
            opportunities.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <Button size="lg" asChild>
              <Link href="/auth">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#">
                {' '}
                <Video className="mr-2 h-4 w-4" /> Watch Video
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div className="text-center">
              <p className="font-bold text-2xl text-foreground">10K+</p>
              <p>Active Students</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-2xl text-foreground">500+</p>
              <p>Expert Instructors</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-2xl text-foreground">100%</p>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
        <div
          className={`relative h-80 md:h-full transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.imageHint}
              fill
              className="object-cover rounded-2xl shadow-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute -bottom-4 -left-4 bg-background/80 backdrop-blur-sm p-3 rounded-xl shadow-lg border text-sm">
            <p className="font-bold text-sky-500">24/7</p>
            <p className="text-muted-foreground">Live Support</p>
          </div>
          <div className="absolute -top-4 -right-4 bg-background/80 backdrop-blur-sm p-3 rounded-xl shadow-lg border text-sm">
            <p className="font-bold text-primary">A+</p>
            <p className="text-muted-foreground">Grade Material</p>
          </div>
        </div>
      </div>
    </section>
  );
}
