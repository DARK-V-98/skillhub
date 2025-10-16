
"use client";
import AdminDashboard from "@/components/dashboard/admin-dashboard";
import SponsorDashboard from "@/components/dashboard/sponsor-dashboard";
import StudentDashboard from "@/components/dashboard/student-dashboard";
import TeacherDashboard from "@/components/dashboard/teacher-dashboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser } from "@/firebase";
import type { Role } from "@/lib/types";

export default function DashboardPage() {
  const { user, isUserLoading } = useUser();
  
  if (isUserLoading) {
    return <div>Loading...</div>; // Or a proper skeleton loader
  }

  if (!user) {
    // This case should ideally be handled by the AuthGuard, but as a fallback:
    return <div>Please log in to view your dashboard.</div>; 
  }

  const currentUserRole = user.role || 'student';

  const canViewTeacher = ['teacher', 'admin', 'developer'].includes(currentUserRole);
  const canViewSponsor = ['sponsor', 'admin', 'developer'].includes(currentUserRole);
  const canViewAdmin = ['admin', 'developer'].includes(currentUserRole);

  const availableRoles: Role[] = ['student'];
  if (canViewTeacher) availableRoles.push('teacher');
  if (canViewSponsor) availableRoles.push('sponsor');
  if (canViewAdmin) availableRoles.push('admin');

  // Determine the default tab. Prioritize the user's actual role.
  // If their role's dashboard isn't available to them, default to 'student'.
  const defaultTab = availableRoles.includes(currentUserRole) ? currentUserRole : 'student';

  return (
    <div className="container py-6 md:py-12">
        <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Welcome, {user.name || user.displayName || 'User'}!</h1>
            <p className="mt-2 text-md md:text-lg text-muted-foreground">
                Here's your overview. Your current role is: <span className="font-bold text-primary capitalize">{currentUserRole}</span>.
            </p>
        </div>
        
        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className={`grid w-full h-auto grid-cols-${availableRoles.length}`}>
            <TabsTrigger value="student">Student</TabsTrigger>
            {canViewTeacher && <TabsTrigger value="teacher">Teacher</TabsTrigger>}
            {canViewSponsor && <TabsTrigger value="sponsor">Sponsor</TabsTrigger>}
            {canViewAdmin && <TabsTrigger value="admin">Admin</TabsTrigger>}
          </TabsList>
          <TabsContent value="student" className="mt-6">
            <StudentDashboard user={user} />
          </TabsContent>
          {canViewTeacher && (
            <TabsContent value="teacher" className="mt-6">
              <TeacherDashboard user={user} />
            </TabsContent>
          )}
          {canViewSponsor && (
            <TabsContent value="sponsor" className="mt-6">
              <SponsorDashboard user={user} />
            </TabsContent>
          )}
          {canViewAdmin && (
             <TabsContent value="admin" className="mt-6">
              <AdminDashboard user={user} />
            </TabsContent>
          )}
        </Tabs>
    </div>
  );
}
