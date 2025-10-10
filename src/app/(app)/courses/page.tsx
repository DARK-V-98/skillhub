"use client";
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CourseCard from "@/components/courses/course-card";
import { placeholderCourses } from "@/lib/placeholder-data";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [level, setLevel] = useState("all");

  const courses = placeholderCourses;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Explore Courses</h1>
            <p className="text-muted-foreground text-lg">
              Discover your next learning adventure from our extensive catalog
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card p-6 rounded-lg shadow-card mb-8">
            <div className="flex flex-col gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                  aria-label="Search courses"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
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
                    <SelectItem value="under-50">Under LKR 5000</SelectItem>
                    <SelectItem value="50-100">LKR 5000 - LKR 10000</SelectItem>
                    <SelectItem value="over-100">Over LKR 10000</SelectItem>
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
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Course Results */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{courses.length}</span> courses
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {courses.map((course, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2">
            <Button variant="outline" disabled>Previous</Button>
            <Button variant="outline" className="bg-primary text-primary-foreground">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>

          {/* Empty State (hidden when courses exist) */}
          {courses.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl font-semibold mb-2">No courses found</p>
              <p className="text-muted-foreground">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
