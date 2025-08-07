import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo2.png" alt="CapitalMitra Logo" width={32} height={32} />
              <span className="font-bold text-xl font-headline text-primary">CapitalMitra</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting ambitious founders with strategic investors and expert mentors to build the future of business.
            </p>
          </div>

          {/* Links - Platform */}
          <div className="md:justify-self-center">
            <h4 className="font-semibold mb-4 font-headline">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/login-selector" className="hover:text-primary hover:underline">Register</Link></li>
              <li><Link href="/login-selector" className="hover:text-primary hover:underline">Login</Link></li>
              <li><Link href="/explore-startups" className="hover:text-primary hover:underline">Explore Startups</Link></li>
              <li><Link href="#features" className="hover:text-primary hover:underline">Features</Link></li>
            </ul>
          </div>

          {/* Links - Legal */}
          <div className="md:justify-self-center">
            <h4 className="font-semibold mb-4 font-headline">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary hover:underline">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary hover:underline">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:justify-self-end">
            <h4 className="font-semibold mb-4 font-headline">Connect</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} CapitalMitra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
