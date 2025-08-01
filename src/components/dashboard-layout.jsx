"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Bell,
  Home,
  Users,
  Briefcase,
  Settings,
  User,
  LogOut,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export function DashboardLayout({ children, userType }) {
    const getNavItems = () => {
        if(userType === 'client') {
            return [
                { href: "/client/dashboard", icon: Home, label: "Dashboard" },
                { href: "/client/find-investors", icon: Briefcase, label: "Find Investors" },
                { href: "/client/find-mentors", icon: Users, label: "Find Mentors" },
                { href: "#", icon: User, label: "Profile" },
                { href: "#", icon: Settings, label: "Settings" },
            ]
        }
        if(userType === 'investor') {
            return [
                { href: "/investor/dashboard", icon: Home, label: "Dashboard" },
                { href: "/investor/find-clients", icon: Target, label: "Find Clients" },
                { href: "/investor/find-mentors", icon: Users, label: "Find Mentors" },
                { href: "#", icon: User, label: "Profile" },
                { href: "#", icon: Settings, label: "Settings" },
            ]
        }
        return [
            { href: "/mentor/dashboard", icon: Home, label: "Dashboard" },
            { href: "/mentor/find-clients", icon: Target, label: "Find Clients" },
            { href: "/mentor/find-investors", icon: Briefcase, label: "Find Investors" },
            { href: "#", icon: User, label: "Profile" },
            { href: "#", icon: Settings, label: "Settings" },
        ]
    }
    
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src="/logo.png" alt="CapitalMitra Logo" width={24} height={24} className="h-6 w-6" />
              <span className="">CapitalMitra</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {getNavItems().map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
             <Button variant="ghost" size="icon" className="md:hidden">
                <Image src="/logo.png" alt="CapitalMitra Logo" width={24} height={24} className="h-6 w-6" />
                <span className="sr-only">Home</span>
            </Button>
          <div className="w-full flex-1">
            {/* Can be used for a search bar */}
          </div>
          <Button asChild variant="ghost">
            <Link href="/login-selector">
                Logout
                <LogOut className="ml-2 h-4 w-4" />
            </Link>
        </Button>
        </header>
        <main className="flex-1 p-4 sm:p-6 md:p-8">
            {children}
        </main>
      </div>
    </div>
  );
}
