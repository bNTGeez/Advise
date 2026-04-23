import { Activity, AlertTriangle, FileUp, Users } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { auditLogs, clients, documents } from "@/lib/mock-data";

const stats = [
  {
    label: "Assigned clients",
    value: clients.length,
    icon: Users,
  },
  {
    label: "Ready documents",
    value: documents.filter((document) => document.status === "ready").length,
    icon: FileUp,
  },
  {
    label: "Recent AI actions",
    value: auditLogs.filter((log) => log.status === "success").length,
    icon: Activity,
  },
  {
    label: "Open risk flags",
    value: clients.filter((client) => client.flaggedIssue).length,
    icon: AlertTriangle,
  },
];

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        description="A quick operational view of assigned clients, recent document activity, AI outputs, and risk flags."
        title="Dashboard"
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              className="rounded-md border border-slate-200 bg-white p-4 shadow-sm"
              key={stat.label}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-600">
                  {stat.label}
                </p>
                <Icon className="text-blue-600" size={18} />
              </div>
              <p className="mt-3 text-3xl font-semibold text-slate-950">
                {stat.value}
              </p>
            </div>
          );
        })}
      </section>

      <section className="mt-6 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-md border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-4 py-3">
            <h2 className="text-sm font-semibold text-slate-950">
              Recent activity
            </h2>
          </div>
          <div className="divide-y divide-slate-100">
            {auditLogs.map((log) => (
              <div className="px-4 py-3" key={log.id}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-950">
                      {log.actionType} for {log.clientName}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      {log.queryText}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-slate-500">
                    {log.createdAt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-950">
            Flagged client context
          </h2>
          <div className="mt-4 space-y-3">
            {clients
              .filter((client) => client.flaggedIssue)
              .map((client) => (
                <Link
                  className="block rounded-md border border-amber-200 bg-amber-50 p-3 hover:bg-amber-100"
                  href={`/clients/${client.id}`}
                  key={client.id}
                >
                  <p className="text-sm font-medium text-amber-950">
                    {client.fullName}
                  </p>
                  <p className="mt-1 text-sm text-amber-800">
                    {client.flaggedIssue}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

