import { cn } from "@/lib/utils";

const styles = {
  ready: "border-emerald-200 bg-emerald-50 text-emerald-700",
  processing: "border-amber-200 bg-amber-50 text-amber-700",
  failed: "border-red-200 bg-red-50 text-red-700",
  success: "border-emerald-200 bg-emerald-50 text-emerald-700",
  failure: "border-red-200 bg-red-50 text-red-700",
};

export function StatusBadge({
  status,
  className,
}: {
  status: keyof typeof styles;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium capitalize",
        styles[status],
        className,
      )}
    >
      {status}
    </span>
  );
}

