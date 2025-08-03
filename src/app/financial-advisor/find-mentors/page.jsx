"use client";

import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Medal, ArrowRight } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Input } from "@/components/ui/input";
import { mentors } from '@/lib/mentors';


export default function FindMentorsPage() {
    const BDTFormatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'BDT',
        minimumFractionDigits: 0,
    });
  return (
    <DashboardLayout userType="financial-advisor">
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
            <Card key={mentor.id} className="flex flex-col">
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
                <p className="text-muted-foreground text-sm flex-grow line-clamp-3">{mentor.about}</p>
                <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-1"><Medal className="h-4 w-4"/>Fields of Expertise</h4>
                    <div className="flex flex-wrap gap-1.5">
                        {mentor.fieldsOfExpertise.map(expertise => <Badge key={expertise} variant="secondary">{expertise}</Badge>)}
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-1"><DollarSign className="h-4 w-4"/>Fee Range (per session)</h4>
                    <p className="text-sm font-bold">{BDTFormatter.format(mentor.feeRange.min)} - {BDTFormatter.format(mentor.feeRange.max)}</p>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full">
                    <Link href={`/explore-mentors/${mentor.id}`}>
                      View Profile <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
