import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold">SkillHub</span>
          </div>
          <div className="text-center text-sm text-muted-foreground md:text-left">
            <p>
              &copy; {currentYear} SkillHub, Inc. All rights reserved.
            </p>
             <p>
              Developed by <a href="https://www.esystemlk.xyz" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">esystemlk</a>
            </p>
          </div>
          <nav className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
