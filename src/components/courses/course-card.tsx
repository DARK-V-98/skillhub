import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Course } from "@/lib/types";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { title, imageUrl, imageHint, instructor, rating, price, category, studentsEnrolled } = course;
  
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageHint}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={imageHint}
          />
          <Badge className="absolute top-3 right-3">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-2 flex-grow">
        <h3 className="font-semibold text-lg line-clamp-2 min-h-[2.5em]">{title}</h3>
        <p className="text-sm text-muted-foreground">by {instructor.name}</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
          {studentsEnrolled && (
            <span className="text-sm text-muted-foreground">({studentsEnrolled.toLocaleString()} students)</span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="text-xl font-bold text-primary">LKR {price.toFixed(2)}</span>
        <Button size="sm" asChild>
          <Link href={`/courses/${course.id}`}>View Course</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
