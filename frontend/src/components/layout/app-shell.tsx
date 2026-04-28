"use client";

import {
  Activity,
  BarChart3,
  Bug,
  Files,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { currentUser } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/clients", label: "Clients", icon: Files },
  { href: "/audit-logs", label: "Audit Logs", icon: Activity },
  { href: "/admin", label: "Admin", icon: Bug },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white lg:block">
        <div className="flex h-16 items-center gap-3 border-b border-slate-200 px-5">
          <div className="flex size-9 items-center justify-center rounded-md bg-blue-600 text-white">
            <ShieldCheck size={19} />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">
              Advisor Intelligence
            </p>
            <p className="text-xs text-slate-500">Secure client RAG</p>
          </div>
        </div>
        <nav className="space-y-1 p-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950",
                  active && "bg-blue-50 text-blue-700",
                )}
                href={item.href}
                key={item.href}
              >
                <Icon size={17} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur lg:px-8">
          <div className="flex items-center gap-3">
            <BarChart3 className="text-blue-600" size={20} />
            <span className="text-sm font-medium text-slate-700">
              Advisor workspace
            </span>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-slate-950">
              {currentUser.name}
            </p>
            <p className="text-xs capitalize text-slate-500">
              {currentUser.role}
            </p>
          </div>
        </header>

        <main className="px-4 py-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}

