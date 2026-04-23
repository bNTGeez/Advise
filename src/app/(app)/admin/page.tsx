import { Database, Gauge, Workflow } from "lucide-react";
import { PageHeader } from "@/components/page-header";

const metrics = [
  { label: "Documents ready", value: "23", icon: Database },
  { label: "Processing uploads", value: "1", icon: Workflow },
  { label: "Avg model latency", value: "2.4s", icon: Gauge },
];

export default function AdminPage() {
  return (
    <>
      <PageHeader
        description="Operational placeholders for ingestion status, chunk counts, model latency, prompt versions, and retrieval diagnostics."
        title="Admin Debug"
      />
      <section className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              className="rounded-md border border-slate-200 bg-white p-4 shadow-sm"
              key={metric.label}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-600">
                  {metric.label}
                </p>
                <Icon className="text-blue-600" size={18} />
              </div>
              <p className="mt-3 text-3xl font-semibold text-slate-950">
                {metric.value}
              </p>
            </div>
          );
        })}
      </section>
    </>
  );
}

