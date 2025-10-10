'use client';

import { useAuth } from '@/hooks/use-auth';
import StudentDashboard from '@/components/dashboard/student-dashboard';
import TeacherDashboard from '@/components/dashboard/teacher-dashboard';
import SponsorDashboard from '@/components/dashboard/sponsor-dashboard';
import AdminDashboard from '@/components/dashboard/admin-dashboard';
import { Skeleton } from '@/components/ui/skeleton';

export default function DashboardPage() {
  const { user, loading } = useAuth();

  if (loading || !user) {
    return (
       <div className="p-8 space-y-4">
        <Skeleton className="h-12 w-1/4" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  const renderDashboard = () => {
    switch (user.role) {
      case 'student':
        return <StudentDashboard user={user} />;
      case 'teacher':
        return <TeacherDashboard user={user} />;
      case 'sponsor':
        return <SponsorDashboard user={user} />;
      case 'admin':
        return <AdminDashboard user={user} />;
      default:
        return <div>Invalid user role.</div>;
    }
  };

  return <div className="p-4 sm:p-6 lg:p-8">{renderDashboard()}</div>;
}
