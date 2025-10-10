import AuthGuard from '@/components/auth-guard';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto">
          {children}
        </main>
        <Footer />
      </div>
    </AuthGuard>
  );
}
