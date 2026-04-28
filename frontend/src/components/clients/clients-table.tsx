"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import Link from "next/link";
import type { Client } from "@/lib/types";

const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "fullName",
    header: "Client",
    cell: ({ row }) => (
      <Link
        className="font-medium text-blue-700 hover:text-blue-800"
        href={`/clients/${row.original.id}`}
      >
        {row.original.fullName}
      </Link>
    ),
  },
  {
    accessorKey: "riskProfile",
    header: "Risk profile",
    cell: ({ row }) => (
      <span className="capitalize">{row.original.riskProfile}</span>
    ),
  },
  {
    accessorKey: "documentCount",
    header: "Docs",
  },
  {
    accessorKey: "lastActivityAt",
    header: "Last activity",
  },
  {
    accessorKey: "flaggedIssue",
    header: "Flag",
    cell: ({ row }) => row.original.flaggedIssue ?? "None",
  },
];

export function ClientsTable({ data }: { data: Client[] }) {
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
