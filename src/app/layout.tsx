import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/components/providers/auth-provider";


export const metadata: Metadata = {
  title: "SkillHub - Learn, Teach & Grow Together",
  description: "Empowering learners and educators worldwide with accessible, quality education. Join live sessions, browse 10,000+ courses, and connect with expert instructors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <TooltipProvider>
            {children}
            <Toaster />
            <SonnerToaster />
          </TooltipProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
