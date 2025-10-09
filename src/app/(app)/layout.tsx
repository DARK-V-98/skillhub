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
        <Header />
        <main className="flex-grow container mx-auto px-4 md:px-6 py-8">
          {children}
        </main>
        <Footer />
      </div>
    </AuthGuard>
  );
}
