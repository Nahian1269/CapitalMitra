import Link from "next/link";
import Image from "next/image";

export function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md space-y-6">
        <div className="flex flex-col items-center">
          <Link href="/" className="mb-4 flex items-center space-x-2">
            <Image src="/logo.png" alt="CapitalMitra Logo" width={32} height={32} />
            <span className="text-2xl font-bold text-primary font-headline">CapitalMitra</span>
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
