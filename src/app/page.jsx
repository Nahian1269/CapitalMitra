
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase, Target, Users, Quote, CheckCircle, Handshake } from "lucide-react";
import React from 'react';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative w-full overflow-hidden bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-20">
              <div className="space-y-6 text-center lg:text-left z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground font-headline">
                  Connect. Fund. <span className="text-primary">Grow.</span>
                </h1>
                <p className="max-w-xl mx-auto lg:mx-0 text-muted-foreground md:text-xl">
                  CapitalMitra is the premier ecosystem where ambitious founders, strategic investors, and expert mentors unite to build the future.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow">
                    <Link href="/login-selector">
                      Join The Ecosystem
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="#features">
                      Explore Features
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-full hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-3xl animate-pulse-slow"></div>
                <Image
                  src="/xyz.jpg"
                  alt="Business Growth"
                  width={600}
                  height={600}
                  className="relative z-10 rounded-full object-cover shadow-2xl"
                  data-ai-hint="business growth chart"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">The Ecosystem</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A Platform for Growth</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
                  We provide tailored tools and opportunities for every stakeholder in the startup ecosystem.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:max-w-none">
              <FeatureCard icon={<Target />} title="For Clients" description="Connect with investors who match your vision and secure the funding to bring your ideas to life." />
              <FeatureCard icon={<Briefcase />} title="For Investors" description="Discover curated, high-potential ventures and diversify your portfolio with promising startups." />
              <FeatureCard icon={<Users />} title="For Mentors" description="Share your expertise with the next generation and help shape the future of innovative businesses." />
              <FeatureCard icon={<Handshake />} title="For Advisors" description="Provide expert financial guidance and connect with a network of high-growth companies and investors." />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Getting Started is Easy</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
                  Three simple steps to join our thriving community.
                </p>
            </div>
            <div className="mx-auto grid gap-12 pt-12 sm:grid-cols-1 md:grid-cols-3">
                <StepCard number="1" title="Register" description="Choose your role and create a detailed profile to showcase your project, investment criteria, or expertise." />
                <StepCard number="2" title="Connect" description="Our platform helps you find the right matches. Browse profiles, send requests, and start conversations." />
                <StepCard number="3" title="Grow" description="Collaborate to build successful ventures, grow your investments, and make a lasting impact in the industry." />
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl font-headline text-primary">What Our Users Say</h2>
            <p className="max-w-[900px] mx-auto text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body mb-12">
              Hear from members who have found success on our platform.
            </p>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 p-4">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <Quote className="w-8 h-8 text-accent mb-4" />
                        <p className="mb-4">"CapitalMitra connected me with an investor who not only funded my startup but also became a key mentor. It's more than just a platform; it's a community."</p>
                      </div>
                      <div className="flex items-center gap-4 pt-4 border-t">
                        <Avatar>
                           <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="woman portrait" />
                           <AvatarFallback>JC</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">Jane Cooper</p>
                          <p className="text-sm text-muted-foreground">Founder, Tech Innovators</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 p-4">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <Quote className="w-8 h-8 text-accent mb-4" />
                        <p className="mb-4">"As an investor, the quality of projects on CapitalMitra is outstanding. I've diversified my portfolio with ventures I truly believe in."</p>
                      </div>
                      <div className="flex items-center gap-4 pt-4 border-t">
                        <Avatar>
                           <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="man portrait" />
                           <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">John Doe</p>
                          <p className="text-sm text-muted-foreground">Angel Investor</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                 <CarouselItem className="md:basis-1/2 p-4">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <Quote className="w-8 h-8 text-accent mb-4" />
                        <p className="mb-4">"Mentoring on this platform has been incredibly rewarding. It's fulfilling to share my experience and see new businesses thrive with my guidance."</p>
                      </div>
                      <div className="flex items-center gap-4 pt-4 border-t">
                        <Avatar>
                           <AvatarImage src="https://placehold.co/40x40.png" data-ai-hint="woman professional" />
                           <AvatarFallback>SA</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">Sarah Adams</p>
                          <p className="text-sm text-muted-foreground">Industry Mentor</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const FeatureCard = ({ icon, title, description }) => (
    <Card className="text-center p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full text-primary">
                {React.cloneElement(icon, { className: "h-8 w-8" })}
            </div>
        </div>
        <CardTitle className="font-headline text-lg mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
    </Card>
)

const StepCard = ({ number, title, description }) => (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="flex items-center justify-center rounded-full bg-primary text-primary-foreground h-16 w-16 text-2xl font-bold border-4 border-primary/20">{number}</div>
      <h3 className="text-xl font-bold font-headline mt-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
)
