
"use client";

import React from 'react';
import { notFound } from 'next/navigation';
import { investors } from '@/lib/investors';
import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Globe, Linkedin, Briefcase, DollarSign, TrendingUp, History, Lightbulb, FileText, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function InvestorProfilePage({ params }) {
  const investor = investors.find(i => i.id === params.id);

  if (!investor) {
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
              <AvatarImage src={investor.avatarUrl} alt={investor.fullName} data-ai-hint="portrait professional" />
              <AvatarFallback>{investor.fullName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <CardTitle className="text-3xl font-headline">{investor.fullName}</CardTitle>
              <CardDescription>{investor.category}</CardDescription>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-muted-foreground">
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {investor.country}</span>
                {investor.website && <a href={`https://${investor.website}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-primary hover:underline"><Globe className="h-4 w-4" /> Website</a>}
                {investor.linkedin && <a href={`https://${investor.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-primary hover:underline"><Linkedin className="h-4 w-4" /> LinkedIn</a>}
              </div>
            </div>
            <a href={`mailto:user@example.com?subject=Funding Request via CapitalMitra&body=Dear ${investor.fullName},`}>
                <Button>
                    <Mail className="mr-2 h-4 w-4" /> Request Funding
                </Button>
            </a>
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
                <p className="text-2xl font-bold">{BDTFormatter.format(investor.investmentRange.min)} - {BDTFormatter.format(investor.investmentRange.max)}</p>
              </div>
              {investor.investmentHistory.length > 0 && (
                 <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><History className="h-5 w-5 text-primary"/> Investment History</h3>
                    <div className="space-y-2">
                        {investor.investmentHistory.map(deal => (
                            <Card key={deal.name} className="bg-muted/50">
                                <CardContent className="p-3 flex items-center justify-between">
                                    <div>
                                        <p className="font-semibold">{deal.name}</p>
                                        <p className="text-sm text-muted-foreground">Amount: {BDTFormatter.format(deal.amount)}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
              )}
               <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><FileText className="h-5 w-5 text-primary"/> Profile/Resume</h3>
                     <a href={investor.profileLink} target="_blank" rel="noreferrer">
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
