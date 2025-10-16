"use client";
import AdminDashboard from "@/components/dashboard/admin-dashboard";
import SponsorDashboard from "@/components/dashboard/sponsor-dashboard";
import StudentDashboard from "@/components/dashboard/student-dashboard";
import TeacherDashboard from "@/components/dashboard/teacher-dashboard";
import { useUser } from "@/firebase";

export default function DashboardPage() {
  const { user, isUserLoading } = useUser();
  
  if (isUserLoading) {
    return <div>Loading...</div>; // Or a proper skeleton loader
  }

  if (!user) {
    // This case should ideally be handled by the AuthGuard, but as a fallback:
    return <div>Please log in to view your dashboard.</div>; 
  }

  const renderDashboard = () => {
    // @ts-ignore - role is not part of the base User type, but is on our AppUser
    switch (user.role) {
      case "student":
        // @ts-ignore
        return <StudentDashboard user={user} />;
      case "teacher":
        // @ts-ignore
        return <TeacherDashboard user={user} />;
      case "sponsor":
        // @ts-ignore
        return <SponsorDashboard user={user} />;
      case "admin":
        // @ts-ignore
        return <AdminDashboard user={user} />;
      default:
        // Default to student dashboard if role is missing for some reason
        // @ts-ignore
        return <StudentDashboard user={user} />;
    }
  };

  return (
    <div className="container py-12">
        <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight">Welcome, {user.displayName || 'User'}!</h1>
            <p className="mt-2 text-lg text-muted-foreground">
                Here's your personalized dashboard.
            </p>
        </div>
        {renderDashboard()}
    </div>
  );
}
