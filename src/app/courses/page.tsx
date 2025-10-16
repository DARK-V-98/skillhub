
"use client";
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CourseCard from "@/components/courses/course-card";
import { placeholderCourses } from "@/lib/placeholder-data";

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [level, setLevel] = useState("all");

  const courses = placeholderCourses;

  return (
      <div className="container py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Explore Courses</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Discover your next learning adventure from our extensive catalog.
          </p>
        </div>

        <div className="mb-8 rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex flex-col gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                aria-label="Search courses"
              />
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full sm:w-[200px]" aria-label="Filter by category">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Development">Development</SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Data Science">Data Science</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full sm:w-[200px]" aria-label="Filter by price">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="under-50">Under LKR 15,000</SelectItem>
                  <SelectItem value="50-100">LKR 15,000 - LKR 30,000</SelectItem>
                  <SelectItem value="over-100">Over LKR 30,000</SelectItem>
                </SelectContent>
              </Select>

              <Select value={level} onValueChange={setLevel}>
                <SelectTrigger className="w-full sm:w-[200px]" aria-label="Filter by level">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="w-full sm:w-auto">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{courses.length}</span> courses
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {courses.length > 8 && (
            <div className="mt-12 flex justify-center">
                <Button variant="outline">Load More</Button>
            </div>
        )}

        {courses.length === 0 && (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-semibold">No courses found</h2>
            <p className="mt-2 text-muted-foreground">Try adjusting your filters or search query.</p>
          </div>
        )}
      </div>
  );
};
