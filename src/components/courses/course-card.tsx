import { Star } from "lucide-react";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Course } from "@/lib/types";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const { title, instructor, category, studentsEnrolled, imageUrl, imageHint } = course;
  
  // Dummy data for now
  const rating = 4.5 + Math.random() * 0.5;
  const price = `LKR ${(Math.random() * 40 + 20).toFixed(2)}`;

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageHint}
            width={600}
            height={400}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            data-ai-hint={imageHint}
          />
          <Badge className="absolute top-3 right-3 bg-primary">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-2 flex-grow">
        <h3 className="font-semibold text-lg line-clamp-2 min-h-[3.5rem]">{title}</h3>
        <p className="text-sm text-muted-foreground">by {instructor.name}</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
            <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
          {studentsEnrolled && (
            <span className="text-sm text-muted-foreground">({studentsEnrolled.toLocaleString()} students)</span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="text-2xl font-bold text-primary">{price}</span>
        <Button size="sm" className="bg-gradient-primary hover:opacity-90 transition-opacity">
          View Course
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
