"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Building, Target } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Input } from "@/components/ui/input";

const clients = [
    {
        fullName: "John Doe",
        avatarUrl: "https://placehold.co/80x80.png",
        company: "Tech Innovators Inc.",
        stage: "Seed",
        fundingGoal: 500000,
        summary: "AI-powered learning platform revolutionizing the ed-tech space. Looking for seed funding to scale our MVP and expand our user base.",
    },
    {
        fullName: "Alex Ray",
        avatarUrl: "https://placehold.co/80x80.png",
        company: "Healthify",
        stage: "Pre-seed",
        fundingGoal: 150000,
        summary: "A mobile app that connects users with personalized nutrition plans and fitness coaches. Seeking pre-seed capital for product development.",
    },
    {
        fullName: "Samantha Lee",
        avatarUrl: "https://placehold.co/80x80.png",
        company: "EcoGoods",
        stage: "Series A",
        fundingGoal: 2000000,
        summary: "Sustainable e-commerce marketplace for eco-friendly products. Raising Series A to expand our market reach and logistics network.",
    }
];

export default function FindClientsPage() {
  return (
    <DashboardLayout userType="mentor">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold font-headline">Find Clients</h1>
          <p className="text-muted-foreground">Browse and discover startups to mentor.</p>
           <div className="mt-4">
            <Input placeholder="Search by company, industry, or stage..." />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client) => (
            <Card key={client.fullName} className="flex flex-col">
              <CardHeader className="flex-row items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={client.avatarUrl} alt={client.fullName} data-ai-hint="portrait professional" />
                  <AvatarFallback>{client.fullName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl font-headline">{client.fullName}</CardTitle>
                  <CardDescription className="flex items-center gap-2"><Building className="h-4 w-4"/>{client.company}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col gap-4">
                <p className="text-muted-foreground text-sm flex-grow">{client.summary}</p>
                 <div>
                    <h4 className="font-semibold text-sm mb-2">Stage</h4>
                    <Badge variant="secondary">{client.stage}</Badge>
                </div>
                <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-1"><Target className="h-4 w-4"/>Funding Goal</h4>
                    <p className="text-sm font-bold">${client.fundingGoal.toLocaleString()}</p>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <a href={`mailto:user@example.com?subject=Mentorship Inquiry for ${client.company}&body=Dear ${client.fullName},`}>
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
