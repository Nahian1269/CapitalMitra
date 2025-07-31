"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Edit, Globe, Linkedin, Briefcase, DollarSign, TrendingUp, History, Lightbulb } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard-layout";

export default function InvestorDashboard() {
  const investor = {
    fullName: "Jane Smith",
    logoUrl: "https://placehold.co/80x80.png",
    about: "Seasoned angel investor with a passion for disruptive technologies. I focus on early-stage startups in the SaaS and FinTech sectors. My goal is to partner with visionary founders and provide not just capital, but also strategic guidance to help them scale. I have a track record of successful exits and a strong network in Silicon Valley.",
    country: "USA",
    website: "www.janesmith.com",
    linkedin: "linkedin.com/in/janesmith",
    interests: ["Technology", "SaaS", "FinTech", "AI"],
    investmentRange: {
        min: 50000,
        max: 500000,
    },
    investmentHistory: [
        { company: "Innovate AI", amount: 100000, stage: "Seed" },
        { company: "Fintech Solutions", amount: 250000, stage: "Series A" },
        { company: "HealthCare Plus", amount: 150000, stage: "Seed" },
    ],
    investmentFocus: ["Pre-seed", "Seed", "Series A"]
  };

  return (
    <DashboardLayout userType="investor">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-start justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={investor.logoUrl} alt={investor.fullName} />
                  <AvatarFallback>{investor.fullName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-3xl font-headline">{investor.fullName}</CardTitle>
                  <CardDescription>Angel Investor</CardDescription>
                   <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                    <a href={`https://${investor.website}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary"><Globe className="h-4 w-4" /> {investor.website}</a>
                    <a href={`https://${investor.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary"><Linkedin className="h-4 w-4" /> LinkedIn</a>
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
                <p className="text-muted-foreground">{investor.about}</p>
              </div>

              <Separator className="my-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><Lightbulb className="h-5 w-5 text-primary"/> Fields of Interest</h3>
                    <div className="flex flex-wrap gap-2">
                        {investor.interests.map(interest => <Badge key={interest} variant="secondary">{interest}</Badge>)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><DollarSign className="h-5 w-5 text-primary"/> Investment Range</h3>
                     <p className="text-2xl font-bold">${investor.investmentRange.min.toLocaleString()} - ${investor.investmentRange.max.toLocaleString()}</p>
                  </div>
                   <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><TrendingUp className="h-5 w-5 text-primary"/> Investment Focus</h3>
                    <div className="flex flex-wrap gap-2">
                        {investor.investmentFocus.map(focus => <Badge key={focus} variant="outline">{focus}</Badge>)}
                    </div>
                  </div>
              </div>

              <Separator className="my-6" />
              
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><History className="h-5 w-5 text-primary"/> Investment History</h3>
                 <div className="space-y-4">
                    {investor.investmentHistory.map(deal => (
                        <Card key={deal.company}>
                            <CardHeader className="flex-row items-center justify-between p-4">
                                <div>
                                    <p className="font-semibold">{deal.company}</p>
                                    <p className="text-sm text-muted-foreground">Stage: {deal.stage}</p>
                                </div>
                                <p className="font-bold text-primary">${deal.amount.toLocaleString()}</p>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
    </DashboardLayout>
  );
}
