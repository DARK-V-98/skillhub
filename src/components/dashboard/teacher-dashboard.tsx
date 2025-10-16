
'use client';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import type { AppUser } from "@/lib/types";
import { placeholderCourses } from "@/lib/placeholder-data";
import { PlusCircle, Users, BarChart, DollarSign, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface TeacherDashboardProps {
  user: AppUser;
}

const revenueData = [
  { month: "Jan", revenue: 1200 },
  { month: "Feb", revenue: 1500 },
  { month: "Mar", revenue: 1100 },
  { month: "Apr", revenue: 1800 },
  { month: "May", revenue: 2100 },
  { month: "Jun", revenue: 2500 },
];

const enrollmentData = [
    { month: "Jan", students: 50 },
    { month: "Feb", students: 65 },
    { month: "Mar", students: 80 },
    { month: "Apr", students: 70 },
    { month: "May", students: 95 },
    { month: "Jun", students: 120 },
];

const myCourses = [
  { ...placeholderCourses[1], status: 'Published' },
  { ...placeholderCourses[3], status: 'Published' },
  { ...placeholderCourses[0], status: 'Draft' },
];

const recentReviews = [
    { id: 1, studentName: "Alice", studentAvatar: "https://i.pravatar.cc/40?u=alice-review", courseTitle: "Advanced React Patterns", rating: 5, comment: "This course was amazing! So in-depth." },
    { id: 2, studentName: "Bob", studentAvatar: "https://i.pravatar.cc/40?u=bob-review", courseTitle: "Data Science with Python", rating: 4, comment: "Great content, but I wish there were more practical exercises." },
];

export default function TeacherDashboard({ user }: TeacherDashboardProps) {
  const totalStudents = myCourses.filter(c => c.status === 'Published').reduce((sum, course) => sum + course.studentsEnrolled, 0);

  return (
    <div className="space-y-8">
      <section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
              <div className="text-2xl font-bold">{myCourses.filter(c => c.status === 'Published').length}</div>
              <p className="text-xs text-muted-foreground">{myCourses.filter(c => c.status === 'Draft').length} drafts</p>
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

      <section className="grid gap-8 md:grid-cols-2">
          <Card>
              <CardHeader>
                  <CardTitle>Monthly Revenue</CardTitle>
                  <CardDescription>Your earnings over the last 6 months.</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart data={revenueData}>
                          <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                          <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                          <Tooltip cursor={{fill: 'hsl(var(--muted))'}} contentStyle={{backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))'}}/>
                          <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                      </RechartsBarChart>
                  </ResponsiveContainer>
              </CardContent>
          </Card>
          <Card>
              <CardHeader>
                  <CardTitle>New Student Enrollments</CardTitle>
                  <CardDescription>Student growth over the last 6 months.</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={enrollmentData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip contentStyle={{backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))'}}/>
                        <Line type="monotone" dataKey="students" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
              </CardContent>
          </Card>
      </section>

      <section>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <h2 className="text-2xl font-bold">My Courses</h2>
          <Button className="w-full sm:w-auto">
            <PlusCircle className="mr-2 h-4 w-4" /> Create New Course
          </Button>
        </div>
        <Card>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course Title</TableHead>
                  <TableHead className="hidden sm:table-cell">Status</TableHead>
                  <TableHead className="hidden md:table-cell">Students</TableHead>
                  <TableHead className="hidden md:table-cell">Price</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {myCourses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell className="font-medium">{course.title}</TableCell>
                    <TableCell className="hidden sm:table-cell">
                        <Badge variant={course.status === 'Published' ? 'default' : 'secondary'}>{course.status}</Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{course.studentsEnrolled.toLocaleString()}</TableCell>
                    <TableCell className="hidden md:table-cell">LKR {course.price.toFixed(2)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">Manage</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </section>
      
      <section>
          <h2 className="text-2xl font-bold mb-4">Recent Reviews</h2>
          <div className="space-y-4">
              {recentReviews.map(review => (
                  <Card key={review.id}>
                      <CardContent className="p-4 flex items-start gap-4">
                           <Avatar>
                              <AvatarImage src={review.studentAvatar} />
                              <AvatarFallback>{review.studentName.charAt(0)}</AvatarFallback>
                           </Avatar>
                           <div className="flex-1">
                               <div className="flex justify-between items-start">
                                   <div>
                                       <p className="font-semibold">{review.studentName}</p>
                                       <p className="text-sm text-muted-foreground">on {review.courseTitle}</p>
                                   </div>
                                   <div className="flex items-center gap-1 text-yellow-500">
                                       {Array.from({ length: 5 }).map((_, i) => (
                                           <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-current' : 'fill-muted stroke-muted-foreground'}`} />
                                       ))}
                                   </div>
                               </div>
                               <p className="mt-2 text-sm text-foreground/80">"{review.comment}"</p>
                           </div>
                      </CardContent>
                  </Card>
              ))}
          </div>
      </section>
    </div>
  );
}
