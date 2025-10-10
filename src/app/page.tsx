import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, BarChart2, ShieldCheck, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { placeholderImages, placeholderCourses } from '@/lib/placeholder-data';
import CourseCard from '@/components/general/course-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

const featureCards = [
  {
    title: 'Live Sessions',
    description: 'Engage in real-time with expert instructors and a community of learners.',
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Accessible Learning',
    description: 'Courses designed with accessibility in mind to empower every student.',
    icon: <Heart className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Earn by Teaching',
    description: 'Share your knowledge and skills with a global audience and earn revenue.',
    icon: <BarChart2 className="w-8 h-8 text-primary" />,
  },
];

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Student",
    quote: "SkillHub has been a game-changer for my career. The accessible courses and live sessions are top-notch!",
    avatar: placeholderImages.find(img => img.id === 'avatar-1')?.imageUrl || ''
  },
  {
    name: "Maria Garcia",
    role: "Teacher",
    quote: "As a teacher, the platform provides all the tools I need to create engaging content and connect with students.",
    avatar: placeholderImages.find(img => img.id === 'avatar-3')?.imageUrl || ''
  },
  {
    name: "Sam Chen",
    role: "Sponsor",
    quote: "Sponsoring students on SkillHub is a rewarding experience. I can see the direct impact of my contributions.",
    avatar: placeholderImages.find(img => img.id === 'avatar-2')?.imageUrl || ''
  },
]


export default function Home() {
  const heroImage = placeholderImages.find(img => img.id === 'hero');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full py-32 md:py-48 lg:py-60 bg-card flex items-center justify-center">
          {heroImage && (
             <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover z-0"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-foreground">
              Learn, Teach & Grow with SkillHub
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              The premier platform for students to learn, teachers to educate, and sponsors to empower the next generation of talent.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
               <Button asChild size="lg" className="font-semibold">
                <Link href="/courses">Browse Courses <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="font-semibold bg-background/80">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Why Choose SkillHub?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">We provide a comprehensive ecosystem designed for growth, collaboration, and success.</p>
                </div>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
                    {featureCards.map((feature) => (
                        <Card key={feature.title} className="text-center hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="items-center">
                                <div className="bg-primary/10 p-4 rounded-full">
                                    {feature.icon}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardTitle className="font-headline text-xl mb-2">{feature.title}</CardTitle>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Popular Courses */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
                    Explore Our Popular Courses
                </h2>
                <Button variant="ghost" asChild>
                    <Link href="/courses">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {placeholderCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center text-foreground">What Our Community Says</h2>
            <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">Hear from students, teachers, and sponsors who are part of our journey.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="flex flex-col">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground flex-grow">"{testimonial.quote}"</p>
                  </CardContent>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary/10">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Start Learning?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">Join thousands of learners and educators on SkillHub and take the next step in your journey.</p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/signup">Sign Up for Free</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
