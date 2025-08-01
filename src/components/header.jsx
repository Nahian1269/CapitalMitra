import Link from "next/link";
import Image from "next/image";
import { LogIn } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background shadow-md sticky top-0 z-50">
      <Link href="/" className="flex items-center justify-center">
        <Image src="/logo.png" alt="CapitalMitra Logo" width={32} height={32} className="h-8 w-8" />
        <span className="ml-3 font-bold font-headline text-xl text-primary">CapitalMitra</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link
            href="#features"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
        </Link>
        <Link
            href="#how-it-works"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            How it works
        </Link>
        <Link
            href="#testimonials"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Testimonials
        </Link>
        <Button asChild>
            <Link href="/login-selector">
                <LogIn className="mr-2 h-4 w-4"/>
                Login
            </Link>
        </Button>
      </nav>
    </header>
  );
}
