import { Suspense } from "react";
import { getAuditResult } from "@/lib/getData";
import { AuditDashboard } from "./components/AuditDashboard";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      Loading audit...
    </div>
  );
}

export default async function AuditPage() {
  const auditData = await getAuditResult();

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        <Suspense fallback={<Loading />}>
          <AuditDashboard data={auditData} />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}