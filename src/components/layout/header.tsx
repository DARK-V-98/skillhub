"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import UserNav from "../auth/user-nav";
import { useAuth } from "@/hooks/use-auth";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/live", label: "Live" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
  { href: "/sponsor", label: "Sponsor" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, loading } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">SkillHub</span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-foreground/80 ${
                pathname === link.href ? "text-foreground" : "text-foreground/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
           {loading ? null : user ? <UserNav /> : (
            <nav className="hidden items-center space-x-2 md:flex">
              <Button variant="ghost" asChild>
                <Link href="/auth">Log In</Link>
              </Button>
              <Button asChild>
                <Link href="/auth">Sign Up</Link>
              </Button>
            </nav>
           )}
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span className="font-bold">SkillHub</span>
                </Link>
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`transition-colors hover:text-foreground/80 ${
                        pathname === link.href ? "text-foreground" : "text-foreground/60"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                 {loading ? null : !user && (
                    <div className="flex flex-col space-y-2 pt-4 border-t">
                        <Button variant="ghost" asChild>
                            <Link href="/auth" onClick={() => setMobileMenuOpen(false)}>Log In</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/auth" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
                        </Button>
                    </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
