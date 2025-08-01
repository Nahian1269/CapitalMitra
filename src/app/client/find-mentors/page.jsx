"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Linkedin, Mail, Medal } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Input } from "@/components/ui/input";

const mentors = [
    {
        fullName: "Sarah Adams",
        avatarUrl: "https://placehold.co/80x80.png",
        designation: "Marketing & Growth Expert",
        about: "I help startups scale their marketing efforts and achieve sustainable growth. With over 15 years of experience in the tech industry.",
        linkedin: "linkedin.com/in/sarahadams",
        fieldsOfExpertise: ["Marketing", "Growth Hacking", "SaaS", "Branding"],
        feeRange: {
            min: 150,
            max: 500
        }
    },
    {
        fullName: "Michael Chen",
        avatarUrl: "https://placehold.co/80x80.png",
        designation: "Product & Engineering Lead",
        about: "Deep expertise in building and scaling technology products from zero to one. Former engineering manager at a FAANG company.",
        linkedin: "linkedin.com/in/michaelchen",
        fieldsOfExpertise: ["Product Management", "Software Engineering", "Agile", "DevOps"],
        feeRange: {
            min: 200,
            max: 600
        }
    },
    {
        fullName: "David Rodriguez",
        avatarUrl: "https://placehold.co/80x80.png",
        designation: "Fundraising & Finance Expert",
        about: "Ex-VC with a strong network of investors. I help startups with their financial models, pitch decks, and fundraising strategy.",
        linkedin: "linkedin.com/in/davidrodriguez",
        fieldsOfExpertise: ["Fundraising", "Venture Capital", "Financial Modeling"],
        feeRange: {
            min: 250,
            max: 750
        }
    }
];

export default function FindMentorsPage() {
  return (
    <DashboardLayout userType="client">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold font-headline">Find Mentors</h1>
          <p className="text-muted-foreground">Get guidance from experienced industry experts.</p>
           <div className="mt-4">
            <Input placeholder="Search by name or expertise..." />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <Card key={mentor.fullName} className="flex flex-col">
              <CardHeader className="flex-row items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={mentor.avatarUrl} alt={mentor.fullName} data-ai-hint="portrait professional" />
                  <AvatarFallback>{mentor.fullName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl font-headline">{mentor.fullName}</CardTitle>
                  <CardDescription>{mentor.designation}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col gap-4">
                <p className="text-muted-foreground text-sm flex-grow">{mentor.about}</p>
                <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-1"><Medal className="h-4 w-4"/>Fields of Expertise</h4>
                    <div className="flex flex-wrap gap-1.5">
                        {mentor.fieldsOfExpertise.map(expertise => <Badge key={expertise} variant="secondary">{expertise}</Badge>)}
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-1"><DollarSign className="h-4 w-4"/>Fee Range (per hour)</h4>
                    <p className="text-sm font-bold">${mentor.feeRange.min} - ${mentor.feeRange.max}</p>
                </div>
                 <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                    <a href={`https://${mentor.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <a href={`mailto:user@example.com?subject=Mentorship Request via CapitalMitra&body=Dear ${mentor.fullName},`}>
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
