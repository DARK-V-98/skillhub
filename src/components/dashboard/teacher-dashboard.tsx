import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import type { AppUser } from "@/lib/types";
import { placeholderCourses } from "@/lib/placeholder-data";
import { PlusCircle, Users, BarChart } from "lucide-react";

interface TeacherDashboardProps {
  user: AppUser;
}

// Mock data for teacher's courses
const myCourses = [
  placeholderCourses[1],
  {
    id: "marketing-101",
    title: "Digital Marketing Fundamentals",
    description: "Learn SEO, content marketing, and social media strategy.",
    instructor: {
      name: "John Smith",
      avatarUrl: ""
    },
    category: "Marketing",
    duration: "6 Weeks",
    imageUrl: "",
    imageHint: "",
    studentsEnrolled: 450,
  }
];


export default function TeacherDashboard({ user }: TeacherDashboardProps) {
  const totalStudents = myCourses.reduce((sum, course) => sum + course.studentsEnrolled, 0);

  return (
    <div className="space-y-8">
      <section>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
              <PlusCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{myCourses.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStudents.toLocaleString()}</div>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8 / 5.0</div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold font-headline">My Courses</h2>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Create New Course
          </Button>
        </div>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course Title</TableHead>
                <TableHead>Enrolled Students</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {myCourses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell className="font-medium">{course.title}</TableCell>
                  <TableCell>{course.studentsEnrolled.toLocaleString()}</TableCell>
                  <TableCell>{course.category}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">Manage</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>
    </div>
  );
}
