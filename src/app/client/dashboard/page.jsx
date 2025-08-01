"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Briefcase, Mail, Phone, Edit, Target, Zap, Building } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard-layout";

export default function ClientDashboard() {
  const client = {
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    company: "Tech Innovators Inc.",
    stage: "Seed",
    investmentGoals: "Looking for seed funding to scale our MVP and expand our user base. Our goal is to secure $500,000 for a 10% equity stake. We are passionate about revolutionizing the ed-tech space with our AI-powered learning platform.",
    progress: 40,
  };

  const projectStages = ["Ideation", "Pre-seed", "Seed", "Growth (Early)", "Growth", "Maturity"];
  const currentStageIndex = projectStages.indexOf(client.stage);

  return (
    <DashboardLayout userType="client">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-start justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="https://placehold.co/80x80.png" alt={client.fullName} />
                  <AvatarFallback>{client.fullName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-3xl font-headline">{client.fullName}</CardTitle>
                  <CardDescription className="flex items-center gap-2"><Building className="h-4 w-4" />{client.company}</CardDescription>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Mail className="h-4 w-4" /> {client.email}</span>
                    <span className="flex items-center gap-1.5"><Phone className="h-4 w-4" /> {client.phone}</span>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><Target className="h-5 w-5 text-primary"/> Investment Goals</h3>
                    <p className="text-muted-foreground">{client.investmentGoals}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><Zap className="h-5 w-5 text-primary"/> Project Stage</h3>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-primary">{client.stage}</span>
                      <span className="text-sm text-muted-foreground">{client.progress}% Complete</span>
                    </div>
                    <Progress value={client.progress} className="mb-4" />
                     <div className="flex justify-between text-xs text-muted-foreground">
                        {projectStages.map((stage, index) => (
                            <div key={stage} className={`flex flex-col items-center ${index <= currentStageIndex ? 'font-bold text-primary' : ''}`}>
                                <span>{stage}</span>
                            </div>
                        ))}
                    </div>
                  </div>
              </div>
              
              <Separator className="my-6" />
              
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><Briefcase className="h-5 w-5 text-primary"/> Recommended Connections</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Placeholder for connections */}
                    <Card>
                        <CardHeader className="flex-row items-center gap-4">
                             <Avatar>
                                <AvatarImage src="https://placehold.co/40x40.png" />
                               <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">John Doe</p>
                                <p className="text-sm text-muted-foreground">Angel Investor</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <a href="mailto:john.doe@example.com?subject=Connection Request from CapitalMitra">
                                <Button className="w-full">Connect</Button>
                            </a>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex-row items-center gap-4">
                             <Avatar>
                                <AvatarImage src="https://placehold.co/40x40.png" />
                               <AvatarFallback>SA</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">Sarah Adams</p>
                                <p className="text-sm text-muted-foreground">Industry Mentor</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                             <Button className="w-full">Connect</Button>
                        </CardContent>
                    </Card>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
    </DashboardLayout>
  );
}
