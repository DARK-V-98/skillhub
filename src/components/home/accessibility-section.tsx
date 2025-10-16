
'use client';
import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Card } from '@/components/ui/card';
import {
  MonitorPlay,
  Mic,
  Milestone,
  Languages,
  CheckCircle,
} from 'lucide-react';

const accessibilityFeatures = [
  {
    icon: MonitorPlay,
    title: 'Visual Accessibility',
    features: [
      'Screen reader optimization',
      'High contrast modes',
      'Dyslexia-friendly fonts',
      'Adjustable font sizes (16-32px)',
      'Color blind safe palette',
    ],
  },
  {
    icon: Mic,
    title: 'Hearing Accessibility',
    features: [
      'Mandatory captions',
      'Sign language interpretation',
      'Visual notifications',
      'Transcript-only mode',
      'Audio description tracks',
    ],
  },
  {
    icon: Milestone,
    title: 'Motor Accessibility',
    features: [
      'Keyboard-only navigation',
      'Voice control support',
      'Larger click targets (44px+)',
      'Extended timeout periods',
      'No drag-and-drop required',
    ],
  },
  {
    icon: Languages,
    title: 'Cognitive Accessibility',
    features: [
      'Simplified UI mode',
      'Distraction-free reading',
      'Content summarization',
      'Dictionary tooltips',
      'Clear confirmation dialogs',
    ],
  },
];

export function AccessibilitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);
  return (
    <section ref={ref} className="py-20">
      <div
        className={`container text-center max-w-5xl mx-auto transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-orange-500 font-semibold">
          100% Free for All Differently-Abled Students
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-2">
          Accessibility <span className="text-primary">First, Always</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Every student deserves equal access to education. Our platform is built
          from the ground up with comprehensive accessibility features that
          empower all individuals to thrive.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {accessibilityFeatures.map((item, index) => (
            <div
              key={item.title}
              className={`transition-all duration-700 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="text-left p-4 bg-secondary/30 flex flex-col h-full">
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground flex-grow">
                  {item.features.map(f => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500 shrink-0 mt-1" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
