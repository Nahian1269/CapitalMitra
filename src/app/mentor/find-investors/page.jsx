"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Globe, Linkedin, Mail } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Input } from "@/components/ui/input";

const investors = [
    {
        fullName: "Jane Smith",
        logoUrl: "https://placehold.co/80x80.png",
        about: "Seasoned angel investor with a passion for disruptive technologies. I focus on early-stage startups in the SaaS and FinTech sectors.",
        country: "USA",
        website: "www.janesmith.com",
        linkedin: "linkedin.com/in/janesmith",
        interests: ["Technology", "SaaS", "FinTech", "AI"],
        investmentRange: {
            min: 50000,
            max: 500000,
        },
    },
    {
        fullName: "Robert Johnson",
        logoUrl: "https://placehold.co/80x80.png",
        about: "Venture Capitalist backing ambitious founders building the future of commerce and enterprise software. Looking for Series A opportunities.",
        country: "UK",
        website: "www.robertjohnson.vc",
        linkedin: "linkedin.com/in/robertjohnson",
        interests: ["E-commerce", "Enterprise Software", "B2B"],
        investmentRange: {
            min: 250000,
            max: 2000000,
        },
    },
    {
        fullName: "Maria Garcia",
        logoUrl: "https://placehold.co/80x80.png",
        about: "Investor focused on impact-driven startups in health-tech and sustainability. My goal is to support companies making a positive difference in the world.",
        country: "Spain",
        website: "www.mariagarcia.invest",
        linkedin: "linkedin.com/in/mariagarcia",
        interests: ["HealthTech", "Sustainability", "Social Impact"],
        investmentRange: {
            min: 25000,
            max: 200000,
        },
    }
];

export default function FindInvestorsPage() {
  return (
    <DashboardLayout userType="mentor">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold font-headline">Find Investors</h1>
          <p className="text-muted-foreground">Browse and connect with investors for your network.</p>
          <div className="mt-4">
            <Input placeholder="Search by name, interest, or country..." />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investors.map((investor) => (
            <Card key={investor.fullName} className="flex flex-col">
              <CardHeader className="flex-row items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={investor.logoUrl} alt={investor.fullName} data-ai-hint="logo" />
                  <AvatarFallback>{investor.fullName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl font-headline">{investor.fullName}</CardTitle>
                  <CardDescription>Angel Investor</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col gap-4">
                <p className="text-muted-foreground text-sm flex-grow">{investor.about}</p>
                <div>
                    <h4 className="font-semibold text-sm mb-2">Interests</h4>
                    <div className="flex flex-wrap gap-1.5">
                        {investor.interests.map(interest => <Badge key={interest} variant="secondary">{interest}</Badge>)}
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-1"><DollarSign className="h-4 w-4"/>Investment Range</h4>
                    <p className="text-sm font-bold">${investor.investmentRange.min.toLocaleString()} - ${investor.investmentRange.max.toLocaleString()}</p>
                </div>
                <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                    <a href={`https://${investor.website}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary"><Globe className="h-4 w-4" /></a>
                    <a href={`https://${investor.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary"><Linkedin className="h-4 w-4" /></a>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                 <a href={`mailto:user@example.com?subject=Connection via CapitalMitra&body=Dear ${investor.fullName},`}>
                    <Button className="w-full">
                        <Mail className="mr-2 h-4 w-4" /> Connect
                    </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
