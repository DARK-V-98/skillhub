import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import type { AppUser, Role } from "@/lib/types";
import { Users, BookOpen, BarChartBig, UserPlus } from "lucide-react";
import { Button } from "../ui/button";

interface AdminDashboardProps {
  user: AppUser;
}

const allUsers: { id: string; name: string; email: string; role: Role }[] = [
    { id: '1', name: 'Student User', email: 'student@example.com', role: 'student' },
    { id: '2', name: 'Teacher User', email: 'teacher@example.com', role: 'teacher' },
    { id: '3', name: 'Admin User', email: 'admin@example.com', role: 'admin' },
    { id: '4', name: 'Sponsor User', email: 'sponsor@example.com', role: 'sponsor' },
];

export default function AdminDashboard({ user }: AdminDashboardProps) {
  return (
    <div className="space-y-8">
      <section>
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">56</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
              <BarChartBig className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+750</div>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Users Today</CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+15</div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <Tabs defaultValue="users">
          <div className="flex justify-between items-center mb-4">
             <TabsList>
                <TabsTrigger value="users">User Management</TabsTrigger>
                <TabsTrigger value="courses">Course Management</TabsTrigger>
             </TabsList>
             <Button><UserPlus className="mr-2 h-4 w-4" /> Add User</Button>
          </div>
          <TabsContent value="users">
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allUsers.map((u) => (
                    <TableRow key={u.id}>
                      <TableCell className="font-medium">{u.name}</TableCell>
                      <TableCell>{u.email}</TableCell>
                      <TableCell>
                        <Badge variant={u.role === 'admin' ? 'destructive' : 'secondary'}>{u.role}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>Course Management</CardTitle>
                <CardContent className="pt-4">
                  <p>Course management functionality will be implemented here.</p>
                </CardContent>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
