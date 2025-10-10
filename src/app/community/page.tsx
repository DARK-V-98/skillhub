import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-8">
        <h1 className="text-4xl font-bold">Community</h1>
        <p className="mt-4 text-lg">Engage with our community.</p>
      </main>
      <Footer />
    </div>
  );
}
