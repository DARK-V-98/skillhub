
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Video, Accessibility, DollarSign, BookOpen, Users, Award } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CourseCard from "@/components/courses/course-card";

const Index = () => {
  const features = [
    {
      icon: Video,
      title: "Live Sessions",
      description: "Engage in real-time learning with expert instructors and interactive Q&A sessions.",
    },
    {
      icon: Accessibility,
      title: "Accessible Learning",
      description: "Inclusive education with captions, transcripts, and customizable accessibility features.",
    },
    {
      icon: DollarSign,
      title: "Earn by Teaching",
      description: "Share your expertise and earn income by creating and selling courses on our platform.",
    },
  ];

  const popularCourses = [
    {
      title: "Complete Web Development Bootcamp",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      teacher: "Sarah Johnson",
      rating: 4.8,
      price: "LKR 49.99",
      category: "Development",
      studentsCount: 12500,
    },
    {
      title: "Digital Marketing Mastery",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      teacher: "Michael Chen",
      rating: 4.9,
      price: "LKR 39.99",
      category: "Marketing",
      studentsCount: 8900,
    },
    {
      title: "UI/UX Design Fundamentals",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      teacher: "Emma Wilson",
      rating: 4.7,
      price: "LKR 44.99",
      category: "Design",
      studentsCount: 6700,
    },
    {
      title: "Data Science with Python",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      teacher: "David Park",
      rating: 4.9,
      price: "LKR 54.99",
      category: "Data Science",
      studentsCount: 15200,
    },
  ];

  const testimonials = [
    {
      name: "Alex Rodriguez",
      role: "Software Developer",
      content: "SkillHub transformed my career. The live sessions and practical projects gave me the skills I needed to land my dream job!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    {
      name: "Priya Sharma",
      role: "Digital Marketer",
      content: "The quality of instruction is exceptional. I love how accessible and inclusive the platform is for all learners.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    },
    {
      name: "James Wilson",
      role: "Course Instructor",
      content: "As a teacher, SkillHub provides all the tools I need to create engaging content and connect with students worldwide.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-hero py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Learn, Teach & Grow with <span className="bg-gradient-primary bg-clip-text text-transparent">SkillHub</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Join thousands of learners and educators in a vibrant community dedicated to accessible, quality education for all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg h-12 px-8">
                  <Link href="/auth">Get Started Free</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg h-12 px-8">
                  <Link href="/courses">Browse Courses</Link>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>10,000+ Courses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>500K+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>5,000+ Instructors</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SkillHub?</h2>
              <p className="text-muted-foreground text-lg">Everything you need to succeed in your learning journey</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-card-hover transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="pt-6 space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Courses Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Courses</h2>
              <p className="text-muted-foreground text-lg">Discover our most loved courses from expert instructors</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {popularCourses.map((course, index) => (
                <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CourseCard {...course} />
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/courses">View All Courses</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Community Says</h2>
              <p className="text-muted-foreground text-lg">Join thousands of satisfied learners and educators</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={`${testimonial.name}'s avatar`}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Stay Updated</h2>
              <p className="text-muted-foreground text-lg">
                Subscribe to our newsletter for the latest courses, tips, and exclusive offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  required
                  aria-label="Email address for newsletter"
                />
                <Button type="submit" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
