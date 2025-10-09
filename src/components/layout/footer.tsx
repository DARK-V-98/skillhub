import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">SkillHub</span>
          </div>
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SkillHub. All rights reserved.
          </div>
          <nav className="flex space-x-4 text-sm">
            <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">Courses</Link>
            <Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">Dashboard</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
