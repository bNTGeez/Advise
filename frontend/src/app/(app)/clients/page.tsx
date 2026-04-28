import { ClientsTable } from "@/components/clients/clients-table";
import { PageHeader } from "@/components/page-header";
import { clients } from "@/lib/mock-data";

export default function ClientsPage() {
  return (
    <>
      <PageHeader
        description="Assigned households and client contexts available to the current advisor."
        title="Clients"
      />
      <ClientsTable data={clients} />
    </>
  );
}

