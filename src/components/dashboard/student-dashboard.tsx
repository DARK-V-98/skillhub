"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import type { AppUser, Course } from "@/lib/types";
import { placeholderCourses } from "@/lib/placeholder-data";
import CourseCard from "@/components/courses/course-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface StudentDashboardProps {
  user: AppUser;
}

interface EnrolledCourse extends Course {
  progress: number;
}

const enrolledCourses: EnrolledCourse[] = [
  { ...placeholderCourses[0], progress: 75 },
  { ...placeholderCourses[2], progress: 30 },
];

export default function StudentDashboard({ user }: StudentDashboardProps) {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">My Learning</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {enrolledCourses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription>by {course.instructor.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={course.progress} className="mb-2" />
                <p className="text-sm text-muted-foreground">{course.progress}% complete</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Recommended For You</h2>
          <Button variant="ghost" asChild>
            <Link href="/courses">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderCourses.slice(1, 4).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
