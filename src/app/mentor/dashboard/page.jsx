"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Edit, Globe, Linkedin, Briefcase, DollarSign, Building, Rocket, Medal } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard-layout";

export default function MentorDashboard() {
  const mentor = {
    fullName: "Sarah Adams",
    avatarUrl: "https://placehold.co/80x80.png",
    designation: "Marketing & Growth Expert",
    about: "I help startups scale their marketing efforts and achieve sustainable growth. With over 15 years of experience in the tech industry, I specialize in go-to-market strategy, digital marketing, and brand building. I've worked with several successful startups and am passionate about sharing my knowledge.",
    country: "Canada",
    linkedin: "linkedin.com/in/sarahadams",
    affiliatedOrganization: "GrowthX Hub",
    fieldsOfExpertise: ["Marketing", "Growth Hacking", "SaaS", "Branding"],
    startupsWorkedWith: ["Innovate AI", "Retail Rocket", "SaaSify"],
    feeRange: {
        min: 150,
        max: 500
    }
  };

  return (
    <DashboardLayout userType="mentor">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-start justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={mentor.avatarUrl} alt={mentor.fullName} />
                  <AvatarFallback>{mentor.fullName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-3xl font-headline">{mentor.fullName}</CardTitle>
                  <CardDescription>{mentor.designation}</CardDescription>
                   <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                     <span className="flex items-center gap-1.5"><Building className="h-4 w-4" /> {mentor.affiliatedOrganization}</span>
                    <a href={`https://${mentor.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="icon">
                <Edit className="h-4 w-4" />
                <span className="sr-only">Edit Profile</span>
              </Button>
            </CardHeader>
            <CardContent>
              <Separator className="my-6" />

              <div>
                <h3 className="text-lg font-semibold mb-2">About</h3>
                <p className="text-muted-foreground">{mentor.about}</p>
              </div>

              <Separator className="my-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><Medal className="h-5 w-5 text-primary"/> Fields of Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                        {mentor.fieldsOfExpertise.map(expertise => <Badge key={expertise} variant="secondary">{expertise}</Badge>)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><DollarSign className="h-5 w-5 text-primary"/> Fee Range (per hour)</h3>
                     <p className="text-2xl font-bold">${mentor.feeRange.min} - ${mentor.feeRange.max}</p>
                  </div>
              </div>
              
              <Separator className="my-6" />
              
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><Rocket className="h-5 w-5 text-primary"/> Startups I've Worked With</h3>
                 <div className="flex flex-wrap gap-2">
                    {mentor.startupsWorkedWith.map(startup => (
                        <Badge key={startup} variant="outline">{startup}</Badge>
                    ))}
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
    </DashboardLayout>
  );
}
