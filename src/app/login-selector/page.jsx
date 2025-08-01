import Link from "next/link";
import { AuthLayout } from "@/components/auth-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Target, Users, ArrowRight } from "lucide-react";

export default function LoginSelector() {
  const roles = [
    {
      name: "Client",
      description: "I have a project and I'm looking for funding and guidance.",
      icon: <Target className="h-8 w-8 text-primary" />,
      href: "/login/client",
    },
    {
      name: "Investor",
      description: "I'm looking to invest in new and exciting ventures.",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      href: "/login/investor",
    },
    {
      name: "Mentor",
      description: "I want to share my expertise and guide entrepreneurs.",
      icon: <Users className="h-8 w-8 text-primary" />,
      href: "/login/mentor",
    },
  ];

  return (
    <AuthLayout>
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-headline">Join as a...</CardTitle>
          <CardDescription>Select your role to get started</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {roles.map((role) => (
            <Button asChild key={role.name} variant="outline" className="w-full h-auto justify-start p-4 text-left">
              <Link href={role.href}>
                <div className="flex items-center space-x-4">
                  {role.icon}
                  <div className="flex-1">
                    <p className="font-semibold">{role.name}</p>
                    <p className="text-sm text-muted-foreground">{role.description}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </Link>
            </Button>
          ))}
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
