"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <div className="hidden w-1/2 flex-col items-center justify-center bg-primary p-12 text-primary-foreground lg:flex">
        <GraduationCap className="h-24 w-24" />
        <h1 className="mt-4 text-4xl font-bold">Join SkillHub Today!</h1>
        <p className="mt-2 max-w-sm text-center text-lg opacity-90">
          Start your learning journey or share your expertise with students worldwide.
        </p>
      </div>
      <div className="flex flex-1 items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Create an Account</CardTitle>
            <CardDescription>
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-primary hover:underline">
                Log in
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">I want to join as</Label>
              <Select>
                <SelectTrigger id="role" aria-label="Select role">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student - Learn new skills</SelectItem>
                  <SelectItem value="teacher">Teacher - Share knowledge</SelectItem>
                  <SelectItem value="sponsor">Sponsor - Support education</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">
              Create Account
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
              Sign up with Google
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}