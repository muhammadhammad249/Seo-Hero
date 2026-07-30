import { getAuditResult } from '@/lib/getData';
import { AuditDashboard } from './components/AuditDashboard';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default async function AuditPage() {
  const auditData = await getAuditResult();

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <AuditDashboard data={auditData} />
      </main>
      <Footer />
    </div>
  );
}
