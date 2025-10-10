import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Accessibility, DollarSign, BookOpen, Users, Award } from "lucide-react";
import CourseCard from "@/components/courses/course-card";
import Image from "next/image";
import { placeholderCourses } from "@/lib/placeholder-data";

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

export default function Home() {
  return (
    <>
      <section className="py-20 md:py-32">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Learn, Teach & Grow with <span className="text-primary">SkillHub</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Join thousands of learners and educators in a vibrant community dedicated to accessible, quality education for all.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/auth">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/courses">Browse Courses</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
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
      </section>

      <section className="bg-secondary py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose SkillHub?</h2>
            <p className="mt-4 text-lg text-muted-foreground">Everything you need to succeed in your learning journey</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Popular Courses</h2>
            <p className="mt-4 text-lg text-muted-foreground">Discover our most loved courses from expert instructors</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {placeholderCourses.slice(0, 4).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Community Says</h2>
            <p className="mt-4 text-lg text-muted-foreground">Join thousands of satisfied learners and educators</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="italic text-muted-foreground">"{testimonial.content}"</p>
                  <div className="mt-4 flex items-center gap-4">
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.name}'s avatar`}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
