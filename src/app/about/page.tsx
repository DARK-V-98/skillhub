import { Award, BookOpen, Target, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const stats = [
  { icon: Users, label: "Active Students", value: "10,000+" },
  { icon: Award, label: "Expert Instructors", value: "500+" },
  { icon: BookOpen, label: "Total Courses", value: "5,000+" },
  { icon: Target, label: "Success Rate", value: "98%" },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://i.pravatar.cc/128?u=sarah",
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "https://i.pravatar.cc/128?u=michael",
  },
  {
    name: "Emma Wilson",
    role: "Head of Education",
    image: "https://i.pravatar.cc/128?u=emma",
  },
  {
    name: "David Park",
    role: "Director of Marketing",
    image: "https://i.pravatar.cc/128?u=david",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background -z-10"></div>
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">About SkillHub</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Empowering millions of learners worldwide through accessible, quality education and innovative teaching methods.
          </p>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container max-w-4xl">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Our Mission</h2>
            <p className="mt-4 text-center text-lg text-muted-foreground">
                At SkillHub, we believe that education should be accessible to everyone, everywhere. Our mission is to democratize learning by providing high-quality courses, live sessions, and community support to help individuals achieve their personal and professional goals.
            </p>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Trusted By Thousands</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            Passionate educators, technologists, and innovators.
          </p>
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  width={128}
                  height={128}
                  className="mx-auto mb-4 h-32 w-32 rounded-full"
                />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="py-20">
        <div className="container">
            <div className="bg-gradient-to-r from-primary/80 to-primary/90 rounded-2xl p-12 text-center text-primary-foreground">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Learning Journey?</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
                    Whether you’re starting a new career path or advancing your skills, we have the right course for you.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button size="lg" variant="secondary" asChild>
                    <Link href="/auth">Get Started Free</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <Link href="/courses">Explore Courses</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
