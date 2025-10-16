
'use client';
import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);
  return (
    <section ref={ref} className="py-20 bg-secondary/30">
      <div
        className={`container transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="bg-background rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Transform{' '}
            <span className="text-primary">Your Learning Journey?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Whether you’re starting a new career path or advancing your skills,
            we have the right course for you.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/auth">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/courses">Explore a Tour</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
