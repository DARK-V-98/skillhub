import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  image: string;
  teacher: string;
  rating: number;
  price: string;
  category: string;
  studentsCount?: number;
}

const CourseCard = ({ title, image, teacher, rating, price, category, studentsCount }: CourseCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={`${title} course thumbnail`}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <Badge className="absolute top-3 right-3 bg-primary">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <h3 className="font-semibold text-lg line-clamp-2 min-h-[3.5rem]">{title}</h3>
        <p className="text-sm text-muted-foreground">by {teacher}</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
            <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
          {studentsCount && (
            <span className="text-sm text-muted-foreground">({studentsCount.toLocaleString()} students)</span>
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
