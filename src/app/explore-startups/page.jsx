
"use client";

import Link from "next/link";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { ArrowRight, Briefcase, MapPin, Target } from "lucide-react";
import { startups } from "@/lib/startups";

export default function ExploreStartupsPage() {
    // Assuming userType can be determined from session or context in a real app
    // For now, we'll let DashboardLayout handle it or default it.
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold font-headline">Explore Startups & SMEs</h1>
          <p className="text-muted-foreground">Discover investment-ready ventures and innovative projects.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((startup) => {
            const fundingProgress = (startup.fundingRaised / startup.fundingGoal) * 100;
            return (
              <Card key={startup.id} className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Image src={startup.logoUrl} alt={`${startup.name} logo`} width={64} height={64} className="rounded-lg" data-ai-hint="logo company" />
                    <Badge variant={startup.stage === 'Mature Stage' ? 'default' : 'secondary'}>{startup.stage}</Badge>
                  </div>
                  <CardTitle className="pt-4 text-xl font-headline">{startup.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <Briefcase className="h-4 w-4" /> {startup.sector}
                  </CardDescription>
                   <CardDescription className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4" /> {startup.location.city}, {startup.location.country}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm line-clamp-3">{startup.overview}</p>
                   <div className="mt-4">
                        <div className="flex justify-between items-center mb-1">
                            <h4 className="font-semibold text-sm flex items-center gap-1"><Target className="h-4 w-4"/>Funding Goal</h4>
                            <span className="text-sm font-bold text-primary">BDT {startup.fundingGoal.toLocaleString()}</span>
                        </div>
                        <Progress value={fundingProgress} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-1 text-right">
                            {fundingProgress.toFixed(0)}% raised
                        </p>
                    </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/explore-startups/${startup.id}`}>
                      View Profile <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
