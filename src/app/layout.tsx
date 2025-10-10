import type { Metadata } from "next";
import "./globals.css";
import { FirebaseProvider } from "@/components/providers/firebase-provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";


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
        <FirebaseProvider>
          <TooltipProvider>
            {children}
            <Toaster />
            <SonnerToaster />
          </TooltipProvider>
        </FirebaseProvider>
      </body>
    </html>
  );
}
