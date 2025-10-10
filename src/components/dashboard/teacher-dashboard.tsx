import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import type { AppUser } from "@/lib/types";
import { placeholderCourses } from "@/lib/placeholder-data";
import { PlusCircle, Users, BarChart, DollarSign } from "lucide-react";

interface TeacherDashboardProps {
  user: AppUser;
}

const myCourses = [
  placeholderCourses[1],
  placeholderCourses[3],
];

export default function TeacherDashboard({ user }: TeacherDashboardProps) {
  const totalStudents = myCourses.reduce((sum, course) => sum + course.studentsEnrolled, 0);

  return (
    <div className="space-y-8">
      <section>
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,450</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStudents.toLocaleString()}</div>
               <p className="text-xs text-muted-foreground">+89 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <PlusCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{myCourses.length}</div>
              <p className="text-xs text-muted-foreground">2 drafts</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8 / 5.0</div>
              <p className="text-xs text-muted-foreground">From 234 reviews</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">My Courses</h2>
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
