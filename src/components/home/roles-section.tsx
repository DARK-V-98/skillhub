
'use client';
import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, CheckCircle } from 'lucide-react';

const roleFeatures = [
  {
    role: 'For Students',
    image: 'https://picsum.photos/seed/students-role/600/400',
    imageHint: 'students learning',
    features: [
      'Live, Interactive Sessions',
      'Personalized Learning Paths',
      'Peer-to-Peer Collaboration',
    ],
    buttonText: 'Explore Courses',
    buttonLink: '/courses',
    color: 'primary',
  },
  {
    role: 'For Teachers',
    image: 'https://picsum.photos/seed/teachers-role/600/400',
    imageHint: 'teacher presenting',
    features: [
      'Content Monetization',
      'Powerful Authoring Tools',
      'Audience Engagement Analytics',
    ],
    buttonText: 'Become A Teacher',
    buttonLink: '/auth',
    color: 'sky',
  },
  {
    role: 'For Sponsors',
    image: 'https://picsum.photos/seed/sponsors-role/600/400',
    imageHint: 'business meeting',
    features: ['Fund Scholarships', 'Brand Visibility', 'Impact Reporting'],
    buttonText: 'Become a Sponsor',
    buttonLink: '/sponsor',
    color: 'orange',
  },
];

export function RolesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section ref={ref} className="py-20 bg-secondary/30">
      <div className="container">
        <div
          className={`text-center max-w-3xl mx-auto transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for <span className="text-primary">Every Role</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you’re learning, teaching, or sponsoring, we’ve got you
            covered.
          </p>
        </div>
        <div
          className="mt-12 grid gap-8 md:grid-cols-3"
          style={{ perspective: '1000px' }}
        >
          {roleFeatures.map((role, index) => {
            const animationClass = isVisible
              ? index === 0
                ? 'animate-swing-in-left'
                : index === 1
                ? 'animate-swing-in-down'
                : 'animate-swing-in-right'
              : 'opacity-0';
            return (
              <div key={role.role} className={`${animationClass}`}>
                <Card
                  className={`overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col`}
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={role.image}
                      alt={role.imageHint}
                      fill
                      className="object-cover"
                      data-ai-hint={role.imageHint}
                    />
                    <div
                      className={`absolute top-3 right-3 h-8 w-8 rounded-full flex items-center justify-center ${
                        role.color === 'primary'
                          ? 'bg-primary'
                          : role.color === 'sky'
                          ? 'bg-sky-500'
                          : 'bg-orange-500'
                      }`}
                    >
                      <Users className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <h3 className="text-xl font-bold">{role.role}</h3>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      {role.features.map(feature => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        role.color === 'primary' ? 'default' : 'outline'
                      }
                    >
                      <Link href={role.buttonLink}>{role.buttonText}</Link>
                    </Button>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
