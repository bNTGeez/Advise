import { AuditTable } from "@/components/audit/audit-table";
import { PageHeader } from "@/components/page-header";
import { auditLogs } from "@/lib/mock-data";

export default function AuditLogsPage() {
  return (
    <>
      <PageHeader
        description="Trace advisor AI activity, retrieved source counts, response status, latency, and client context."
        title="Audit Logs"
      />
      <AuditTable data={auditLogs} />
    </>
  );
}

