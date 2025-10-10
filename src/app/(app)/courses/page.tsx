import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CourseCard from "@/components/courses/course-card";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [level, setLevel] = useState("all");

  const courses = [
    {
      title: "Complete Web Development Bootcamp",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      teacher: "Sarah Johnson",
      rating: 4.8,
      price: "$49.99",
      category: "Development",
      studentsCount: 12500,
    },
    {
      title: "Digital Marketing Mastery",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      teacher: "Michael Chen",
      rating: 4.9,
      price: "$39.99",
      category: "Marketing",
      studentsCount: 8900,
    },
    {
      title: "UI/UX Design Fundamentals",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      teacher: "Emma Wilson",
      rating: 4.7,
      price: "$44.99",
      category: "Design",
      studentsCount: 6700,
    },
    {
      title: "Data Science with Python",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      teacher: "David Park",
      rating: 4.9,
      price: "$54.99",
      category: "Data Science",
      studentsCount: 15200,
    },
    {
      title: "Mobile App Development with React Native",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      teacher: "Lisa Anderson",
      rating: 4.6,
      price: "$59.99",
      category: "Development",
      studentsCount: 5400,
    },
    {
      title: "Graphic Design Masterclass",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      teacher: "Tom Martinez",
      rating: 4.8,
      price: "$42.99",
      category: "Design",
      studentsCount: 7800,
    },
    {
      title: "SEO & Content Marketing",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=400&h=300&fit=crop",
      teacher: "Rachel Green",
      rating: 4.7,
      price: "$36.99",
      category: "Marketing",
      studentsCount: 9200,
    },
    {
      title: "Machine Learning A-Z",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=300&fit=crop",
      teacher: "Dr. James Wilson",
      rating: 4.9,
      price: "$64.99",
      category: "Data Science",
      studentsCount: 11300,
    },
  ];

  return (
    <>
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
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="data-science">Data Science</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-full sm:w-[200px]" aria-label="Filter by price">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="under-50">Under $50</SelectItem>
                <SelectItem value="50-100">$50 - $100</SelectItem>
                <SelectItem value="over-100">Over $100</SelectItem>
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
            <CourseCard {...course} />
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
    </>
  );
};

export default Courses;
