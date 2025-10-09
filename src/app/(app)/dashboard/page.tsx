"use client";

import { useAuth } from "@/hooks/use-auth";
import { Skeleton } from "@/components/ui/skeleton";
import StudentDashboard from "@/components/dashboard/student-dashboard";
import TeacherDashboard from "@/components/dashboard/teacher-dashboard";
import AdminDashboard from "@/components/dashboard/admin-dashboard";
import SponsorDashboard from "@/components/dashboard/sponsor-dashboard";

function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-10 w-1/3" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="h-40 rounded-lg" />
        <Skeleton className="h-40 rounded-lg" />
        <Skeleton className="h-40 rounded-lg" />
      </div>
      <Skeleton className="h-64 w-full" />
    </div>
  );
}

export default function DashboardPage() {
  const { user, loading } = useAuth();

  if (loading || !user) {
    return <DashboardSkeleton />;
  }

  const renderDashboard = () => {
    switch (user.role) {
      case "student":
        return <StudentDashboard user={user} />;
      case "teacher":
        return <TeacherDashboard user={user} />;
      case "admin":
        return <AdminDashboard user={user} />;
      case "sponsor":
        return <SponsorDashboard user={user} />;
      default:
        // Default to student dashboard if role is not recognized
        return <StudentDashboard user={user} />;
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold font-headline mb-2">Welcome back, {user.name || "User"}!</h1>
      <p className="text-muted-foreground mb-8">Here's your personalized dashboard.</p>
      {renderDashboard()}
    </div>
  );
}
