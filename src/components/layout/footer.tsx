import Link from "next/link";
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
                 <Link href="/" className="flex items-center space-x-2">
                    <Image src="/logo.png" alt="SkillHub Logo" width={120} height={30} className="h-auto" />
                </Link>
                <p className="text-sm text-muted-foreground">
                    Empowering learners and educators worldwide with accessible, quality education.
                </p>
                 <div className="flex gap-4">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                        <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                        <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                        <Instagram className="h-5 w-5" />
                    </a>
                </div>
            </div>

             <div>
                <h3 className="font-semibold mb-4 text-foreground">Product</h3>
                <ul className="space-y-2">
                    <li><Link href="/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">Courses</Link></li>
                    <li><Link href="/live" className="text-sm text-muted-foreground hover:text-primary transition-colors">Live Sessions</Link></li>
                    <li><Link href="/community" className="text-sm text-muted-foreground hover:text-primary transition-colors">Community</Link></li>
                    <li><Link href="/sponsor" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sponsorship</Link></li>
                </ul>
            </div>
             <div>
                <h3 className="font-semibold mb-4 text-foreground">Company</h3>
                <ul className="space-y-2">
                    <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                    <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
                     <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                </ul>
            </div>
             <div>
                <h3 className="font-semibold mb-4 text-foreground">Resources</h3>
                <ul className="space-y-2">
                    <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                    <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
                    <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                    <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                </ul>
            </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} SkillHub. All rights reserved. Developed by <a href="https://www.esystemlk.xyz" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">esystemlk</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
