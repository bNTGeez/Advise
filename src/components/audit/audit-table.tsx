"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import { StatusBadge } from "@/components/ui/status-badge";
import type { AuditLog } from "@/lib/types";

const columns: ColumnDef<AuditLog>[] = [
  {
    accessorKey: "createdAt",
    header: "Time",
  },
  {
    accessorKey: "advisorName",
    header: "Advisor",
  },
  {
    accessorKey: "clientName",
    header: "Client",
  },
  {
    accessorKey: "actionType",
    header: "Action",
  },
  {
    accessorKey: "retrievedChunkCount",
    header: "Chunks",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
  },
  {
    accessorKey: "latencyMs",
    header: "Latency",
    cell: ({ row }) =>
      row.original.latencyMs ? `${row.original.latencyMs} ms` : "N/A",
  },
];

export function AuditTable({ data }: { data: AuditLog[] }) {
  // TanStack Table returns function-bearing objects that React Compiler skips.
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-slate-100 text-slate-600">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="px-4 py-3 font-medium" key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-slate-100">
          {table.getRowModel().rows.map((row) => (
            <tr className="hover:bg-slate-50" key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className="px-4 py-3 text-slate-700" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
