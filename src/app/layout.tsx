
'use client';
import { useState, useEffect } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/components/providers/auth-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { FirebaseClientProvider } from "@/firebase/client-provider";
import Preloader from "@/components/layout/preloader";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedSkillHub");
    if (hasVisited) {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasVisitedSkillHub", "true");
      }, 2000); // Duration of the preloader
    }
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>SkillHub</title>
        <meta name="description" content="An e-learning and teaching platform." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {isLoading && <Preloader />}
        <FirebaseClientProvider>
          <AuthProvider>
            <TooltipProvider>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
              <Toaster />
            </TooltipProvider>
          </AuthProvider>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
