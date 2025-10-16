
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Video, Users, CheckCircle, BrainCircuit, Milestone, Handshake, Heart, MonitorPlay, Mic, Languages } from "lucide-react";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";

const features = [
  {
    icon: MonitorPlay,
    title: "Live Virtual Classroom",
    description: "Engage with expert instructors in real-time and collaborate with peers.",
  },
  {
    icon: BrainCircuit,
    title: "Content Monetization",
    description: "Share your expertise and build a sustainable income stream.",
  },
  {
    icon: CheckCircle,
    title: "Verified Credentials",
    description: "Earn industry-recognized certificates to boost your career profile.",
  },
  {
    icon: Heart,
    title: "Accessible by Default",
    description: "Our platform is built with inclusivity at its core, supporting all learners.",
  },
  {
    icon: Handshake,
    title: "Corporate Sponsorship",
    description: "Empower your team with tailored learning programs and scholarships.",
  },
  {
    icon: Milestone,
    title: "Developer Portal",
    description: "Integrate and extend SkillHub with our powerful developer APIs.",
  },
];

const roleFeatures = [
    {
        role: "For Students",
        image: "https://picsum.photos/seed/students-role/600/400",
        imageHint: "students learning",
        features: ["Live, Interactive Sessions", "Personalized Learning Paths", "Peer-to-Peer Collaboration"],
        buttonText: "Explore Courses",
        buttonLink: "/courses",
        color: "primary"
    },
    {
        role: "For Teachers",
        image: "https://picsum.photos/seed/teachers-role/600/400",
        imageHint: "teacher presenting",
        features: ["Content Monetization", "Powerful Authoring Tools", "Audience Engagement Analytics"],
        buttonText: "Become A Teacher",
        buttonLink: "/auth",
        color: "sky"
    },
    {
        role: "For Sponsors",
        image: "https://picsum.photos/seed/sponsors-role/600/400",
        imageHint: "business meeting",
        features: ["Fund Scholarships", "Brand Visibility", "Impact Reporting"],
        buttonText: "Become a Sponsor",
        buttonLink: "/sponsor",
        color: "orange"
    }
]

const accessibilityFeatures = [
  {
    icon: MonitorPlay,
    title: "Visual Accessibility",
    features: ["Screen reader optimization", "High contrast modes", "Dyslexia-friendly fonts", "Adjustable font sizes (16-32px)", "Color blind safe palette"]
  },
  {
    icon: Mic,
    title: "Hearing Accessibility",
    features: ["Mandatory captions", "Sign language interpretation", "Visual notifications", "Transcript-only mode", "Audio description tracks"]
  },
  {
    icon: Milestone,
    title: "Motor Accessibility",
    features: ["Keyboard-only navigation", "Voice control support", "Larger click targets (44px+)", "Extended timeout periods", "No drag-and-drop required"]
  },
  {
    icon: Languages,
    title: "Cognitive Accessibility",
    features: ["Simplified UI mode", "Distraction-free reading", "Content summarization", "Dictionary tooltips", "Clear confirmation dialogs"]
  }
];


export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === 'hero');

  return (
    <>
      <section className="relative pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background -z-10"></div>
        <div className="absolute inset-x-0 top-0 h-[500px] w-full bg-[url('/wavy-grid.svg')] bg-cover bg-center bg-repeat-x opacity-20 -z-10"></div>
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <p className="inline-block bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm mb-4">Empowering Education for Everyone</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Empowering Education for <span className="text-sky-500">Everyone</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:mx-0">
              Bridge education gaps with our AI-powered, live teaching tools. Launch your own courses, engage with a global community, and unlock new opportunities.
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <Button size="lg" asChild>
                <Link href="/auth">Get Started Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#"> <Video className="mr-2 h-4 w-4" /> Watch Video</Link>
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
          <div className="relative h-80 md:h-full">
            {heroImage && 
              <Image 
                src={heroImage.imageUrl} 
                alt={heroImage.imageHint} 
                fill
                className="object-cover rounded-2xl shadow-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            }
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

      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything You Need to <span className="text-primary">Learn & Teach</span></h2>
            <p className="mt-4 text-lg text-muted-foreground">A comprehensive platform designed with the best tools and features to help you succeed, whatever your role.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="text-left p-6 bg-secondary/30 hover:bg-secondary/50 transition-colors">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built for <span className="text-primary">Every Role</span></h2>
            <p className="mt-4 text-lg text-muted-foreground">Whether you’re learning, teaching, or sponsoring, we’ve got you covered.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {roleFeatures.map((role) => (
              <Card key={role.role} className="overflow-hidden">
                <div className="relative h-56 w-full">
                  <Image src={role.image} alt={role.imageHint} fill className="object-cover" data-ai-hint={role.imageHint}/>
                   <div className={`absolute top-3 right-3 h-8 w-8 rounded-full flex items-center justify-center ${role.color === 'primary' ? 'bg-primary' : role.color === 'sky' ? 'bg-sky-500' : 'bg-orange-500'}`}>
                    <Users className="h-5 w-5 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
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
                  <Button asChild className="w-full" variant={role.color === 'primary' ? 'default' : 'outline'}>
                    <Link href={role.buttonLink}>{role.buttonText}</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container text-center max-w-5xl mx-auto">
          <p className="text-orange-500 font-semibold">100% Free for All Differently-Abled Students</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-2">Accessibility <span className="text-primary">First, Always</span></h2>
          <p className="mt-4 text-lg text-muted-foreground">Every student deserves equal access to education. Our platform is built from the ground up with comprehensive accessibility features that empower all individuals to thrive.</p>
           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {accessibilityFeatures.map((item, index) => (
                <Card key={index} className="text-left p-4 bg-secondary/30 flex flex-col">
                     <h3 className="font-semibold text-primary">{item.title}</h3>
                     <ul className="mt-2 space-y-1 text-sm text-muted-foreground flex-grow">
                        {item.features.map(f => (
                           <li key={f} className="flex items-center gap-2">
                                <CheckCircle className="h-3 w-3 text-green-500 shrink-0" />
                                <span>{f}</span>
                            </li> 
                        ))}
                     </ul>
                </Card>
            ))}
           </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container">
            <div className="bg-background rounded-2xl p-12 text-center shadow-lg">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform <span className="text-primary">Your Learning Journey?</span></h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    Whether you’re starting a new career path or advancing your skills, we have the right course for you.
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
    </>
  );
}
