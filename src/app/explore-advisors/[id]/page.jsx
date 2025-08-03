
"use client";

import React from 'react';
import { notFound } from 'next/navigation';
import { advisors } from '@/lib/advisors';
import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Linkedin, FileText, MapPin, Star } from 'lucide-react';
import Link from 'next/link';

export default function AdvisorProfilePage({ params }) {
  const advisor = advisors.find(a => a.id === params.id);

  if (!advisor) {
    notFound();
  }
  
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
    ))
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader className="flex flex-col md:flex-row items-start gap-4">
            <Avatar className="h-24 w-24 border">
              <AvatarImage src={advisor.avatarUrl} alt={advisor.fullName} data-ai-hint="portrait professional" />
              <AvatarFallback>{advisor.fullName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <CardTitle className="text-3xl font-headline">{advisor.fullName}</CardTitle>
              <CardDescription>{advisor.designation}</CardDescription>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-muted-foreground">
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {advisor.country}</span>
                {advisor.linkedin && <a href={`https://${advisor.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-primary hover:underline"><Linkedin className="h-4 w-4" /> LinkedIn</a>}
              </div>
            </div>
            <a href={`mailto:user@example.com?subject=Advisory Inquiry via CapitalMitra&body=Dear ${advisor.fullName},`}>
                <Button>
                    <Mail className="mr-2 h-4 w-4" /> Connect
                </Button>
            </a>
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
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">Area of Expertise</h3>
                    <Badge variant="secondary">{advisor.expertise}</Badge>
                </div>
                <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><FileText className="h-5 w-5 text-primary"/> Profile/Resume</h3>
                     <a href={advisor.profileLink} target="_blank" rel="noreferrer">
                        <Button variant="outline" className="w-full justify-start gap-2">
                            <FileText className="h-4 w-4"/>View Full Profile
                        </Button>
                    </a>
                </div>
            </div>
            <Separator className="my-6" />
             <div>
                <h3 className="text-lg font-semibold mb-4">Ratings</h3>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="font-medium">Communication</span>
                        <div className="flex items-center">{renderStars(advisor.ratings.communication)}</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium">Market Knowledge</span>
                        <div className="flex items-center">{renderStars(advisor.ratings.marketKnowledge)}</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-medium">Professionalism</span>
                        <div className="flex items-center">{renderStars(advisor.ratings.professionalism)}</div>
                    </div>
                     <div className="flex justify-between items-center">
                        <span className="font-medium">Responsiveness</span>
                        <div className="flex items-center">{renderStars(advisor.ratings.responsiveness)}</div>
                    </div>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
