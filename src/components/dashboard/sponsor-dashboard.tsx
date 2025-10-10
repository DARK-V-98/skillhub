import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { AppUser } from "@/lib/types";
import { DollarSign, Users, TrendingUp } from "lucide-react";

interface SponsorDashboardProps {
  user: AppUser;
}

const sponsoredStudents = [
  { id: 1, name: "Alice Johnson", course: "Advanced React Patterns", progress: 85, avatar: "https://i.pravatar.cc/40?u=alice" },
  { id: 2, name: "Bob Williams", course: "UI/UX Design Principles", progress: 60, avatar: "https://i.pravatar.cc/40?u=bob" },
  { id: 3, name: "Charlie Brown", course: "Data Science with Python", progress: 45, avatar: "https://i.pravatar.cc/40?u=charlie" },
];

export default function SponsorDashboard({ user }: SponsorDashboardProps) {
  return (
    <div className="space-y-8">
      <section>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sponsored</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{sponsoredStudents.length}</div>
              <p className="text-xs text-muted-foreground">students</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Contribution</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,500</div>
              <p className="text-xs text-muted-foreground">this year</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground">for sponsored students</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Sponsored Student Progress</h2>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Progress</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sponsoredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={student.avatar} alt={student.name} />
                        <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {student.name}
                    </div>
                  </TableCell>
                  <TableCell>{student.course}</TableCell>
                  <TableCell>{student.progress}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>
    </div>
  );
}
