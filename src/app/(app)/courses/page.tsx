import CourseCard from '@/components/general/course-card';
import { placeholderCourses } from '@/lib/placeholder-data';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export default function CoursesPage() {
  const categories = [
    ...new Set(placeholderCourses.map((course) => course.category)),
  ];

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
          Explore Our Courses
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Find the perfect course to help you grow your skills and achieve your goals.
        </p>
      </section>

      <section>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for courses..."
              className="pl-10 w-full"
            />
          </div>
          <Select>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button className="w-full md:w-auto">Search</Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {placeholderCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
           {placeholderCourses.map((course) => (
            <CourseCard key={`${course.id}-2`} course={{...course, id: `${course.id}-2`}} />
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button variant="outline">Load More</Button>
        </div>
      </section>
    </div>
  );
}
