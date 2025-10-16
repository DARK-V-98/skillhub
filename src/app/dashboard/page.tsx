
"use client";
import AdminDashboard from "@/components/dashboard/admin-dashboard";
import SponsorDashboard from "@/components/dashboard/sponsor-dashboard";
import StudentDashboard from "@/components/dashboard/student-dashboard";
import TeacherDashboard from "@/components/dashboard/teacher-dashboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser } from "@/firebase";
import { AppUser } from "@/lib/types";

export default function DashboardPage() {
  const { user, isUserLoading } = useUser();
  
  if (isUserLoading) {
    return <div>Loading...</div>; // Or a proper skeleton loader
  }

  if (!user) {
    // This case should ideally be handled by the AuthGuard, but as a fallback:
    return <div>Please log in to view your dashboard.</div>; 
  }

  const currentUserRole = (user as AppUser).role || 'student';

  return (
    <div className="container py-6 md:py-12">
        <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Welcome, {user.displayName || 'User'}!</h1>
            <p className="mt-2 text-md md:text-lg text-muted-foreground">
                Here's your overview. Your current role is: <span className="font-bold text-primary">{currentUserRole}</span>.
            </p>
        </div>
        
        <Tabs defaultValue={currentUserRole} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
            <TabsTrigger value="student">Student</TabsTrigger>
            <TabsTrigger value="teacher">Teacher</TabsTrigger>
            <TabsTrigger value="sponsor">Sponsor</TabsTrigger>
            <TabsTrigger value="admin">Admin</TabsTrigger>
          </TabsList>
          <TabsContent value="student" className="mt-6">
            <StudentDashboard user={user as AppUser} />
          </TabsContent>
          <TabsContent value="teacher" className="mt-6">
            <TeacherDashboard user={user as AppUser} />
          </TabsContent>
          <TabsContent value="sponsor" className="mt-6">
            <SponsorDashboard user={user as AppUser} />
          </TabsContent>
          <TabsContent value="admin" className="mt-6">
            <AdminDashboard user={user as AppUser} />
          </TabsContent>
        </Tabs>
    </div>
  );
}
