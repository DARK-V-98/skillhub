import AuthGuard from '@/components/auth-guard';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          {children}
        </main>
      </div>
    </AuthGuard>
  );
}
