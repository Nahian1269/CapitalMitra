import Link from "next/link";
import { Mountain } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-card shadow-sm">
      <Link href="/" className="flex items-center justify-center">
        <Mountain className="h-6 w-6 text-primary" />
        <span className="sr-only">CapitalMitra Connect</span>
      </Link>
      <span className="ml-2 font-bold font-headline text-lg">CapitalMitra Connect</span>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
          Features
        </Link>
        <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
          How It Works
        </Link>
        <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
          Testimonials
        </Link>
        <Button asChild>
            <Link href="/login-selector">
                Join Now
            </Link>
        </Button>
      </nav>
    </header>
  );
}
