import Link from "next/link";
import { Mountain } from "lucide-react";
import type { ReactNode } from "react";

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="flex flex-col items-center">
          <Link href="/" className="mb-4 flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary font-headline">CapitalMitra Connect</span>
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
