import Link from "next/link";
import { Mountain, LogOut } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-card shadow-sm border-b">
      <Link href="/" className="flex items-center justify-center">
        <Mountain className="h-6 w-6 text-primary" />
        <span className="sr-only">CapitalMitra Connect</span>
      </Link>
      <span className="ml-2 font-bold font-headline text-lg">CapitalMitra Connect</span>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Button asChild variant="ghost" size="icon">
            <Link href="/login-selector">
                <LogOut />
                <span className="sr-only">Logout</span>
            </Link>
        </Button>
      </nav>
    </header>
  );
}
