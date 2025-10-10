import { BookOpen, Users, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const About = () => {
  const stats = [
    { icon: Users, label: "Active Students", value: "500K+" },
    { icon: BookOpen, label: "Total Courses", value: "10,000+" },
    { icon: Award, label: "Expert Instructors", value: "5,000+" },
    { icon: Target, label: "Success Rate", value: "94%" },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      name: "Emma Wilson",
      role: "Head of Education",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
    {
      name: "David Park",
      role: "Director of Marketing",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SkillHub</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering millions of learners worldwide through accessible, quality education and innovative teaching methods.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                At SkillHub, we believe that education should be accessible to everyone, everywhere. Our mission is to democratize learning by providing high-quality courses, live sessions, and community support to help individuals achieve their personal and professional goals.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <Card className="p-6">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To create a world where quality education knows no boundaries, empowering individuals to unlock their full potential through continuous learning and skill development.
                    </p>
                  </CardContent>
                </Card>
                <Card className="p-6">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                    <p className="text-muted-foreground">
                      We are committed to accessibility, inclusivity, excellence, and innovation. These core values guide every decision we make and every feature we build.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                    <stat.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Passionate educators, technologists, and innovators dedicated to transforming the future of learning.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="pt-6">
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      className="w-24 h-24 rounded-full mx-auto mb-4"
                    />
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Be part of a global learning community that's shaping the future of education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/signup" className="inline-flex items-center justify-center rounded-lg bg-background text-foreground px-8 py-3 font-semibold hover:opacity-90 transition-opacity">
                Get Started Free
              </a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground px-8 py-3 font-semibold hover:bg-primary-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
