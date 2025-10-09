import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { Course } from "@/lib/types";
import { Clock, Users } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  
  return (
    <Link href={`/courses/${course.id}`} className="group">
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0 relative">
        <Image
          src={course.imageUrl}
          alt={course.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          data-ai-hint={course.imageHint}
        />
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <Badge variant="secondary" className="mb-2">{course.category}</Badge>
        <CardTitle className="text-lg font-headline leading-tight group-hover:text-primary transition-colors">
            {course.title}
        </CardTitle>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{course.description}</p>
      </CardContent>
      <CardFooter className="p-4 flex flex-col items-start space-y-4">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={course.instructor.avatarUrl} alt={course.instructor.name} />
            <AvatarFallback>{getInitials(course.instructor.name)}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{course.instructor.name}</span>
        </div>
        <div className="w-full flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{course.studentsEnrolled.toLocaleString()}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
    </Link>
  );
}
