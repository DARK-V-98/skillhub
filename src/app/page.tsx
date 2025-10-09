import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, BarChart, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-data";

const featureCards = [
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: "Diverse Course Catalog",
    description: "Explore a wide range of courses taught by industry experts to enhance your skills.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Expert Instructors",
    description: "Learn from the best. Our instructors are experienced professionals passionate about teaching.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: "Role-Based Dashboards",
    description: "Personalized dashboards for students, teachers, and sponsors to track progress and manage activities.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Secure & Reliable",
    description: "Built on a robust and secure infrastructure to protect your data and privacy.",
  },
];

export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === "hero");
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
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
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight text-foreground">
              Unlock Your Potential with SkillHub
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
              The premier platform for students to learn, teachers to educate, and sponsors to empower the next generation of talent.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="font-semibold">
                <Link href="/courses">
                  Browse Courses <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold bg-background/80">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center text-foreground">
              Why Choose SkillHub?
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground">
              We provide a comprehensive ecosystem designed for growth, collaboration, and success.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {featureCards.map((feature) => (
                <Card key={feature.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="items-center">
                    <div className="bg-primary/10 p-4 rounded-full">
                      {feature.icon}
                    </div>
                    <CardTitle className="mt-4 font-headline">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
