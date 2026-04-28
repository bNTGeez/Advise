import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <section className="w-full max-w-sm rounded-md border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-md bg-blue-600 text-white">
            <ShieldCheck size={20} />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-950">
              Advisor Intelligence
            </h1>
            <p className="text-sm text-slate-500">Mock advisor login</p>
          </div>
        </div>

        <form className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Email</span>
            <input
              className="mt-1 h-10 w-full rounded-md border border-slate-300 px-3 text-sm"
              defaultValue="sarah@example.com"
              type="email"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Password</span>
            <input
              className="mt-1 h-10 w-full rounded-md border border-slate-300 px-3 text-sm"
              defaultValue="password"
              type="password"
            />
          </label>
          <Button className="w-full" type="submit">
            Continue
          </Button>
        </form>

        <Link
          className="mt-4 block text-center text-sm font-medium text-blue-700 hover:text-blue-800"
          href="/dashboard"
        >
          Enter demo workspace
        </Link>
      </section>
    </main>
  );
}

