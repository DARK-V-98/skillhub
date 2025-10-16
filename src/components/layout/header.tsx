
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import UserNav from "../auth/user-nav";
import Image from "next/image";
import { useAuth } from "../providers/auth-provider";
import { Skeleton } from "../ui/skeleton";

const navLinks = [
  { href: "/courses", label: "Courses" },
  { href: "/live", label: "Live" },
  { href: "/sponsor", label: "Sponsorship" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, loading } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/logo.png" alt="SkillHub Logo" width={100} height={25} className="h-auto" />
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
        <div className="flex flex-1 items-center justify-end space-x-2 md:space-x-4">
           {loading ? <Skeleton className="h-8 w-8 rounded-full" /> : user ? <UserNav /> : (
            <nav className="hidden items-center space-x-2 md:flex">
              <Button variant="ghost" asChild>
                <Link href="/auth">Sign in</Link>
              </Button>
              <Button asChild>
                <Link href="/auth">Sign up</Link>
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
                   <Image src="/logo.png" alt="SkillHub Logo" width={100} height={25} className="h-auto" />
                </Link>
                <div className="flex flex-col space-y-2 pt-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-foreground/80 ${
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
