"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Input } from "@/components/ui/input";
import { advisors } from "@/lib/advisors";

export default function FindAdvisorsPage() {

    const renderStars = (rating) => {
        const totalStars = 5;
        let stars = [];
        for(let i = 0; i < rating; i++) {
            stars.push(<Star key={`full-${i}`} className="h-4 w-4 text-yellow-400 fill-yellow-400" />);
        }
        for(let i = rating; i < totalStars; i++) {
            stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
        }
        return stars;
    }

  return (
    <DashboardLayout userType="investor">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold font-headline">Find Advisors</h1>
          <p className="text-muted-foreground">Get professional guidance from financial experts.</p>
          <div className="mt-4">
            <Input placeholder="Search by name or expertise..." />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisors.map((advisor) => (
            <Card key={advisor.id} className="flex flex-col">
              <CardHeader className="flex-row items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={advisor.avatarUrl} alt={advisor.fullName} data-ai-hint="portrait professional" />
                  <AvatarFallback>{advisor.fullName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl font-headline">{advisor.fullName}</CardTitle>
                  <CardDescription>{advisor.designation}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col gap-4">
                <p className="text-muted-foreground text-sm flex-grow line-clamp-3">{advisor.about}</p>
                <div>
                    <h4 className="font-semibold text-sm mb-2">Area of Expertise</h4>
                    <Badge variant="secondary">{advisor.expertise}</Badge>
                </div>
                <div>
                    <h4 className="font-semibold text-sm mb-2">Average Rating</h4>
                    <div className="flex items-center">
                        {renderStars(Math.round((advisor.ratings.communication + advisor.ratings.marketKnowledge + advisor.ratings.professionalism + advisor.ratings.responsiveness)/4))}
                    </div>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full">
                    <Link href={`/explore-advisors/${advisor.id}`}>
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