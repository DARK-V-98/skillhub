
'use client';
import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Card } from '@/components/ui/card';
import {
  MonitorPlay,
  BrainCircuit,
  CheckCircle,
  Heart,
  Handshake,
  Milestone,
} from 'lucide-react';

const features = [
  {
    icon: MonitorPlay,
    title: 'Live Virtual Classroom',
    description:
      'Engage with expert instructors in real-time and collaborate with peers.',
  },
  {
    icon: BrainCircuit,
    title: 'Content Monetization',
    description: 'Share your expertise and build a sustainable income stream.',
  },
  {
    icon: CheckCircle,
    title: 'Verified Credentials',
    description: 'Earn industry-recognized certificates to boost your career profile.',
  },
  {
    icon: Heart,
    title: 'Accessible by Default',
    description:
      'Our platform is built with inclusivity at its core, supporting all learners.',
  },
  {
    icon: Handshake,
    title: 'Corporate Sponsorship',
    description:
      'Empower your team with tailored learning programs and scholarships.',
  },
  {
    icon: Milestone,
    title: 'Developer Portal',
    description: 'Integrate and extend SkillHub with our powerful developer APIs.',
  },
];

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section ref={ref} className="py-20">
      <div className="container">
        <div
          className={`text-center max-w-3xl mx-auto transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to <span className="text-primary">Learn & Teach</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive platform designed with the best tools and features to
            help you succeed, whatever your role.
          </p>
        </div>
        <div
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: '1000px' }}
        >
          {features.map((feature, index) => {
            const animationClass = isVisible
              ? index % 3 === 0
                ? 'animate-swing-in-left'
                : index % 3 === 1
                ? 'animate-swing-in-down'
                : 'animate-swing-in-right'
              : 'opacity-0';
            return (
              <div key={feature.title} className={animationClass}>
                <Card className="text-left p-6 bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
