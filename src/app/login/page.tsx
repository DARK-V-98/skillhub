"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <div className="hidden w-1/2 flex-col items-center justify-center bg-primary p-12 text-primary-foreground lg:flex">
        <GraduationCap className="h-24 w-24" />
        <h1 className="mt-4 text-4xl font-bold">Welcome Back!</h1>
        <p className="mt-2 max-w-sm text-center text-lg opacity-90">
          Continue your learning journey with SkillHub. Access your courses, track progress, and connect with instructors.
        </p>
      </div>
      <div className="flex flex-1 items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Login to Your Account</CardTitle>
            <CardDescription>
              Or{" "}
              <Link href="/signup" className="font-medium text-primary hover:underline">
                create an account
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember-me" />
                <Label htmlFor="remember-me" className="text-sm font-normal">Remember me</Label>
              </div>
              <Link href="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full">
              Log In
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Sign in with Google
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}