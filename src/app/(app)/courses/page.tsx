import CourseCard from "@/components/general/course-card";
import { placeholderCourses } from "@/lib/placeholder-data";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function CoursesPage() {
  // In a real app, you would fetch courses from your database
  const courses = placeholderCourses;

  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-headline">Explore Our Courses</h1>
        <p className="mt-2 text-lg text-muted-foreground">Find the perfect course to boost your skills.</p>
      </div>

      <div className="mb-8 max-w-lg mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search for courses..." 
            className="pl-10 w-full"
          />
        </div>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
