
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container py-12 animate-fade-in">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl animate-fade-in-up">Get in Touch</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <form className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="How can we help?" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us more about your inquiry..."
                rows={6}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
        </form>
        
        <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">Email Us</h3>
              <p className="text-muted-foreground">support@skillhub.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">Call Us</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">Visit Us</h3>
              <p className="text-muted-foreground">123 Education St, San Francisco, CA</p>
            </div>
          </div>
           <div className="h-64 w-full rounded-lg bg-secondary flex items-center justify-center">
             <p className="text-muted-foreground">Map Placeholder</p>
           </div>
        </div>
      </div>
    </div>
  );
}
