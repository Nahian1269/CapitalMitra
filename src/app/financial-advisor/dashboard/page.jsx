"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Edit, Linkedin, Building, Wallet, Handshake, Medal } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard-layout";

export default function FinancialAdvisorDashboard() {
  const advisor = {
    fullName: "Alex Jordan",
    avatarUrl: "https://placehold.co/80x80.png",
    designation: "Certified Financial Planner",
    about: "A dedicated financial advisor with over 15 years of experience in investment management, retirement planning, and wealth strategy. My mission is to empower clients to achieve their financial goals through personalized advice and a disciplined investment approach. I specialize in working with startup founders and early-stage investors.",
    country: "USA",
    linkedin: "linkedin.com/in/alexjordan",
    affiliatedOrganization: "WealthBridge Advisors",
    specializations: ["Investment Management", "Retirement Planning", "Wealth Strategy", "Tax Planning"],
    clientTestimonials: [
        { name: "Rashed Ali , Founder of Tech Innovators", quote: "Alex's guidance was crucial during our seed round." },
        { name: "Fahim Hafiz, Angel Investor", quote: "A trustworthy and knowledgeable advisor." },
    ],
    feeStructure: "1% AUM + Hourly Consulting"
  };

  return (
    <DashboardLayout userType="financial-advisor">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-start justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={advisor.avatarUrl} alt={advisor.fullName} data-ai-hint="portrait professional" />
                  <AvatarFallback>{advisor.fullName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-3xl font-headline">{advisor.fullName}</CardTitle>
                  <CardDescription>{advisor.designation}</CardDescription>
                   <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                     <span className="flex items-center gap-1.5"><Building className="h-4 w-4" /> {advisor.affiliatedOrganization}</span>
                    <a href={`https://${advisor.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-primary"><Linkedin className="h-4 w-4" /> LinkedIn</a>
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
                <p className="text-muted-foreground">{advisor.about}</p>
              </div>

              <Separator className="my-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><Medal className="h-5 w-5 text-primary"/> Areas of Specialization</h3>
                    <div className="flex flex-wrap gap-2">
                        {advisor.specializations.map(spec => <Badge key={spec} variant="secondary">{spec}</Badge>)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><Wallet className="h-5 w-5 text-primary"/> Fee Structure</h3>
                     <p className="text-lg font-bold">{advisor.feeStructure}</p>
                  </div>
              </div>
              
              <Separator className="my-6" />
              
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><Handshake className="h-5 w-5 text-primary"/> Client Testimonials</h3>
                 <div className="space-y-4">
                    {advisor.clientTestimonials.map(testimonial => (
                        <Card key={testimonial.name} className="bg-muted/50 border-l-4 border-primary">
                            <CardContent className="p-4">
                                <blockquote className="italic">"{testimonial.quote}"</blockquote>
                                <p className="text-right font-semibold text-sm mt-2">- {testimonial.name}</p>
                            </CardContent>
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