
"use client";

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { startups } from '@/lib/startups';
import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Briefcase,
  MapPin,
  Globe,
  Calendar,
  Verified,
  DollarSign,
  Users,
  FileText,
  Video,
  Facebook,
  Linkedin,
  Youtube,
  Twitter
} from 'lucide-react';

export default function StartupProfilePage({ params }) {
  const startup = startups.find(s => s.id === params.id);

  if (!startup) {
    notFound();
  }

  const fundingProgress = (startup.fundingRaised / startup.fundingGoal) * 100;
  const BDTFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
  });

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <Image src={startup.logoUrl} alt={`${startup.name} logo`} width={128} height={128} className="rounded-lg border" data-ai-hint="logo company"/>
              <div className="flex-grow">
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-bold font-headline">{startup.name}</h1>
                  {startup.verified && <Verified className="h-6 w-6 text-blue-500" />}
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> {startup.sector}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {startup.location.city}, {startup.location.country}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> Founded: {startup.foundedYear}</span>
                    {startup.website && <a href={startup.website} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-primary hover:underline"><Globe className="h-4 w-4" /> {startup.website}</a>}
                </div>
                 <div className="mt-4">
                    <h3 className="font-semibold">Funding Status</h3>
                    <div className="flex items-center gap-4 mt-1">
                        <span className="text-lg font-bold text-primary">{BDTFormatter.format(startup.fundingGoal)}</span>
                        <Progress value={fundingProgress} className="w-full max-w-sm" />
                        <span>{fundingProgress.toFixed(0)}%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Raised {BDTFormatter.format(startup.fundingRaised)} so far.</p>
                 </div>
              </div>
               <Button>Invest Now</Button>
            </div>
            <Separator className="my-6" />
            <div>
                <h3 className="font-semibold mb-1">Overview</h3>
                <p className="text-muted-foreground text-sm">{startup.overview}</p>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Tabs defaultValue="details" className="mt-6">
          <TabsList>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="videoPitch">Video Pitch</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details">
            <Card>
              <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <InfoItem title="Business Type" value={startup.businessType} />
                 <InfoItem title="Product Type" value={startup.productType} />
                 <InfoItem title="Company Stage" value={startup.stage} />
                 <InfoItem title="Annual Revenue" value={BDTFormatter.format(startup.annualRevenue)} />
                 <InfoItem title="Monthly Recurring Revenue" value={BDTFormatter.format(startup.monthlyRecurringRevenue)} />
                 <InfoItem title="Number of Employees" value={startup.employeeCount} />
                 <div className="lg:col-span-3">
                    <h4 className="font-semibold mb-2">Social Presence</h4>
                    <div className="flex items-center gap-4">
                       {startup.socials.facebook && <SocialLink href={startup.socials.facebook} icon={<Facebook />} />}
                       {startup.socials.linkedin && <SocialLink href={startup.socials.linkedin} icon={<Linkedin />} />}
                       {startup.socials.twitter && <SocialLink href={startup.socials.twitter} icon={<Twitter />} />}
                       {startup.socials.youtube && <SocialLink href={startup.socials.youtube} icon={<Youtube />} />}
                    </div>
                 </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="team">
            <Card>
              <CardHeader>
                <CardTitle>Meet the Team</CardTitle>
                <CardDescription>The people driving the vision.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {startup.team.map(member => (
                    <div key={member.name} className="flex items-start gap-4 p-4 border rounded-lg">
                        <Avatar className="h-16 w-16">
                            <AvatarImage src={`https://placehold.co/64x64.png`} data-ai-hint="person professional"/>
                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-bold">{member.name}</p>
                            <p className="text-primary">{member.designation}</p>
                            <p className="text-sm text-muted-foreground mt-2">{member.about}</p>
                        </div>
                    </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card>
                <CardHeader>
                    <CardTitle>Documents</CardTitle>
                    <CardDescription>Essential documents for due diligence.</CardDescription>
                </CardHeader>
              <CardContent>
                <div className="space-y-3">
                    {startup.pitchDeckUrl && (
                        <DocumentLink href={startup.pitchDeckUrl} name="View Pitch Deck" />
                    )}
                    {startup.documents.map(doc => (
                        <div key={doc} className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                           <span className="flex items-center gap-2 font-medium"><FileText className="h-4 w-4"/> {doc}</span>
                           <Badge variant="outline">Available</Badge>
                        </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="videoPitch">
            <Card>
                <CardHeader>
                    <CardTitle>Video Pitch</CardTitle>
                    <CardDescription>Watch the founders present their vision.</CardDescription>
                </CardHeader>
              <CardContent>
                {startup.videoPitchUrl ? (
                  <div className="aspect-video">
                     <iframe
                        className="w-full h-full rounded-lg"
                        src={startup.videoPitchUrl}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-lg">
                    <Video className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="font-semibold">No Video Pitch Available</p>
                    <p className="text-sm text-muted-foreground">This startup has not uploaded a video pitch yet.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

const InfoItem = ({ title, value }) => (
    <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="font-semibold">{value}</p>
    </div>
);

const DocumentLink = ({ href, name }) => (
    <Link href={href} target="_blank" rel="noreferrer">
        <Button variant="outline" className="w-full justify-start gap-2">
            <FileText className="h-4 w-4"/>{name}
        </Button>
    </Link>
)

const SocialLink = ({ href, icon }) => (
    <a href={href} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
       {React.cloneElement(icon, { className: "h-6 w-6" })}
    </a>
)
