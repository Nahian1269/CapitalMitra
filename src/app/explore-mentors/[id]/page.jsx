
"use client";

import React from 'react';
import { notFound } from 'next/navigation';
import { mentors } from '@/lib/mentors';
import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Linkedin, DollarSign, Medal, Rocket, FileText, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function MentorProfilePage({ params }) {
  const mentor = mentors.find(m => m.id === params.id);

  if (!mentor) {
    notFound();
  }
  
  const BDTFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
  });

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader className="flex flex-col md:flex-row items-start gap-4">
            <Avatar className="h-24 w-24 border">
              <AvatarImage src={mentor.avatarUrl} alt={mentor.fullName} data-ai-hint="portrait professional" />
              <AvatarFallback>{mentor.fullName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <CardTitle className="text-3xl font-headline">{mentor.fullName}</CardTitle>
              <CardDescription>{mentor.designation}</CardDescription>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-muted-foreground">
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {mentor.country}</span>
                {mentor.linkedin && <a href={`https://${mentor.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-primary hover:underline"><Linkedin className="h-4 w-4" /> LinkedIn</a>}
              </div>
            </div>
            <a href={`mailto:user@example.com?subject=Mentorship Request via CapitalMitra&body=Dear ${mentor.fullName},`}>
                <Button>
                    <Mail className="mr-2 h-4 w-4" /> Connect
                </Button>
            </a>
          </CardHeader>
          <CardContent>
            <Separator className="my-6" />
            <div>
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p className="text-muted-foreground whitespace-pre-wrap">{mentor.about}</p>
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
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><DollarSign className="h-5 w-5 text-primary"/> Fee Range (per session)</h3>
                <p className="text-2xl font-bold">{BDTFormatter.format(mentor.feeRange.min)} - {BDTFormatter.format(mentor.feeRange.max)}</p>
              </div>
              {mentor.startupsWorkedWith.length > 0 && (
                 <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><Rocket className="h-5 w-5 text-primary"/> Startups Worked With</h3>
                     <div className="flex flex-wrap gap-2">
                        {mentor.startupsWorkedWith.map(startup => (
                            <Badge key={startup} variant="outline">{startup}</Badge>
                        ))}
                    </div>
                </div>
              )}
               <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><FileText className="h-5 w-5 text-primary"/> Profile/Resume</h3>
                     <a href={mentor.profileLink} target="_blank" rel="noreferrer">
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <FileText className="h-4 w-4"/>View Full Profile
                        </Button>
                    </a>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
