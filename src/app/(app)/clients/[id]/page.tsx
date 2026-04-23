import { FileUp, MessageSquareText, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { clients, documents } from "@/lib/mock-data";

export default async function ClientDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const client = clients.find((item) => item.id === id);

  if (!client) {
    notFound();
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[320px_minmax(0,1fr)_340px]">
      <aside className="space-y-5">
        <section className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Client workspace
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-950">
            {client.fullName}
          </h1>
          <p className="mt-1 text-sm capitalize text-slate-600">
            {client.riskProfile} risk profile
          </p>
          <p className="mt-4 text-sm leading-6 text-slate-700">
            {client.householdNotes}
          </p>
        </section>

        <section className="rounded-md border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
            <h2 className="text-sm font-semibold text-slate-950">Documents</h2>
            <Button className="h-8" variant="secondary">
              <FileUp size={15} />
              Upload
            </Button>
          </div>
          <div className="divide-y divide-slate-100">
            {documents.map((document) => (
              <div className="p-4" key={document.id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-slate-950">
                      {document.filename}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {document.documentType} - {document.uploadedAt}
                    </p>
                  </div>
                  <StatusBadge status={document.status} />
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  {document.chunkCount} indexed chunks
                </p>
              </div>
            ))}
          </div>
        </section>
      </aside>

      <section className="space-y-5">
        <div className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <MessageSquareText className="text-blue-600" size={18} />
            <h2 className="text-sm font-semibold text-slate-950">Ask AI</h2>
          </div>
          <textarea
            className="mt-4 min-h-28 w-full resize-y rounded-md border border-slate-300 p-3 text-sm"
            defaultValue="Summarize this client's portfolio changes from Q1 to Q2 and flag any risk issues."
          />
          <div className="mt-3 flex flex-wrap gap-2">
            <Button>
              <Sparkles size={15} />
              Ask question
            </Button>
            <Button variant="secondary">Summarize</Button>
            <Button variant="secondary">Risk review</Button>
            <Button variant="secondary">Meeting prep</Button>
            <Button variant="secondary">Draft email</Button>
          </div>
        </div>

        <div className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-950">
            Latest AI response
          </h2>
          <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
            Once the backend AI flow is connected, grounded answers will appear
            here with missing-data warnings and linked sources.
          </div>
        </div>

        <div className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-950">
            Generated artifacts
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {["Meeting prep", "Risk review", "Follow-up email"].map((item) => (
              <div
                className="rounded-md border border-slate-200 p-3 text-sm"
                key={item}
              >
                <p className="font-medium text-slate-950">{item}</p>
                <p className="mt-1 text-slate-500">Ready for Phase 08.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <aside className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-950">
          Source citations
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Retrieved document chunks will appear here with file names, section
          titles, excerpts, chunk ids, and timestamps.
        </p>
        <div className="mt-4 space-y-3">
          <div className="rounded-md border border-slate-200 p-3">
            <p className="text-xs font-medium uppercase text-slate-500">
              Example source
            </p>
            <p className="mt-1 text-sm font-medium text-slate-950">
              Jane_Q2_Portfolio_Report.pdf
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Allocation Changes - chunk_12
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
