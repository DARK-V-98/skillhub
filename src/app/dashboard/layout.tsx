
'use client';
import AuthGuard from '@/components/auth-guard';
import { useAuth } from '@/components/providers/auth-provider';
import AdminDashboard from '@/components/dashboard/admin-dashboard';
import SponsorDashboard from '@/components/dashboard/sponsor-dashboard';
import StudentDashboard from '@/components/dashboard/student-dashboard';
import TeacherDashboard from '@/components/dashboard/teacher-dashboard';
import { AppUser } from '@/lib/types';
import { useUser } from '@/firebase';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <AuthGuard>
        {children}
    </AuthGuard>
  );
}
