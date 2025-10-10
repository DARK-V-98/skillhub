import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const footerLinks = [
    {
        title: "Platform",
        links: [
            { label: "Courses", href: "/courses" },
            { label: "Live Sessions", href: "/live" },
            { label: "Community", href: "/community" },
            { label: "Sponsorships", href: "#" },
        ]
    },
    {
        title: "Company",
        links: [
            { label: "About Us", href: "/about" },
            { label: "Careers", href: "#" },
            { label: "Press", href: "#" },
        ]
    },
    {
        title: "Resources",
        links: [
            { label: "Blog", href: "#" },
            { label: "Help Center", href: "#" },
            { label: "Contact Us", href: "#" },
        ]
    },
]

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 py-12">
        <div className="grid gap-8 grid-cols-2 md:grid-cols-5">
            <div className="col-span-2 md:col-span-2">
                 <Link href="/" className="flex items-center space-x-2 mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg">SkillHub</span>
                </Link>
                <p className="text-muted-foreground text-sm max-w-xs">
                    Empowering the next generation of talent through accessible education.
                </p>
                <div className="mt-6">
                    <h4 className="font-semibold mb-2">Subscribe to our newsletter</h4>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input type="email" placeholder="Email" />
                        <Button type="submit">Subscribe</Button>
                    </div>
                </div>
            </div>
            {footerLinks.map((section) => (
                <div key={section.title}>
                    <h4 className="font-semibold mb-4">{section.title}</h4>
                    <ul className="space-y-2">
                        {section.links.map((link) => (
                             <li key={link.label}>
                                <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} SkillHub. All rights reserved.
          </div>
          <nav className="flex space-x-4 text-sm mt-4 sm:mt-0">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
