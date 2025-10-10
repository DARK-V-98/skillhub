"use client";
import AdminDashboard from "@/components/dashboard/admin-dashboard";
import SponsorDashboard from "@/components/dashboard/sponsor-dashboard";
import StudentDashboard from "@/components/dashboard/student-dashboard";
import TeacherDashboard from "@/components/dashboard/teacher-dashboard";
import { useAuth } from "@/hooks/use-auth";

export default function DashboardPage() {
  const { user } = useAuth();
  
  if (!user) {
    return null; 
  }

  const renderDashboard = () => {
    switch (user.role) {
      case "student":
        return <StudentDashboard user={user} />;
      case "teacher":
        return <TeacherDashboard user={user} />;
      case "sponsor":
        return <SponsorDashboard user={user} />;
      case "admin":
        return <AdminDashboard user={user} />;
      default:
        return <div>Invalid user role.</div>;
    }
  };

  return (
    <div className="container py-12">
        <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight">Welcome, {user.name || 'User'}!</h1>
            <p className="mt-2 text-lg text-muted-foreground">
                Here's your personalized dashboard.
            </p>
        </div>
        {renderDashboard()}
    </div>
  );
}
