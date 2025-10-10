"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import UserNav from "@/components/auth/user-nav";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "/courses", label: "Courses" },
  { href: "/live", label: "Live" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const { user, loading } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg sm:inline-block">
            SkillHub
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
           <nav className="flex items-center space-x-2">
            {loading ? (
              <div className="h-8 w-20 animate-pulse rounded-md bg-muted" />
            ) : user ? (
              <UserNav />
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </nav>
          <div className="md:hidden">
             <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b">
                        <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                            <GraduationCap className="h-6 w-6 text-primary" />
                            <span className="font-bold text-lg">SkillHub</span>
                        </Link>
                        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </div>
                    <nav className="flex flex-col p-4 space-y-2">
                      <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium p-2 rounded-md hover:bg-muted">Home</Link>
                      {navLinks.map((link) => (
                        <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-medium p-2 rounded-md hover:bg-muted"
                        >
                        {link.label}
                        </Link>
                      ))}
                    </nav>
                    <div className="mt-auto p-4 border-t">
                        {loading ? (
                             <div className="h-8 w-full animate-pulse rounded-md bg-muted" />
                        ) : !user && (
                            <div className="flex flex-col space-y-2">
                                <Button variant="ghost" asChild>
                                  <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
                                </Button>
                                <Button asChild>
                                  <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
